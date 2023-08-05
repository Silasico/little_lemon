import * as Sqlite from "expo-sqlite"


const db = Sqlite.openDatabase("little-lemon")

export const createTable = async () => {
    db.transaction(tx => {
      tx.executeSql("create table if not exists menuitems (id integer primary key not null, name text(100), description text, price integer, category text)")
    })
}

export const saveData = (data) => {
  db.transaction(tx => {
    tx.executeSql("insert into menuitems(name, description, price, category, image) values " + data.map(item => (`("${item.name}", "${item.description}", "${item.price}", "${item.category}", "${item.image}")`)).join(", "))
  })
}

export const getAllData = async () => {
  return new Promise(resolve => {
    db.transaction(tx => {
      tx.executeSql("SELECT * FROM menuitems", [],
      (txObj, resultObj) => {
        resolve (resultObj.rows._array)
      },
      (txObj, error) => {
        console.log(error);
      }
      )
    })
  })
}

export const filterData = async (activeCategory, query) => {
  return new Promise ((resolve, reject) => {
    //console.log('select * from menuitems where name like "%' + query + '%" and category in(' + activeCategory.map(category => `'${category}'`).join(", ") + ')');
    
    //console.log('select * from menuitems where title like "%' + query + '%" and category in(' + activeCategory.map(category => `'${category.toLowerCase()}'`).join(', ') + ')');
    db.transaction(tx => {
      tx.executeSql("select * from menuitems where name like '%" + query + "%' and category in(" + activeCategory.map(category => `"${category.toLowerCase()}"`).join(", ") + ")", [],
        (txObj, resultObj) => {
          resolve (resultObj.rows._array)
        },
        (txObj, error) => {
          console.log(error);
        }
      )
    })
  })
}