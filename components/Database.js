import * as Sqlite from "expo-sqlite"


const db = Sqlite.openDatabase("little-lemon")

export const createTable = async () => {
  db.transaction(tx => {
    tx.executeSql("create table if not exist menuitems(id integer primary key not null, name varchar(100), description varchar(255), price integer, category varchar(100))")
  })
}

export const saveData = async (data) => {
  db.transaction(tx => {
    tx.executeSql("insert into menuitems(name, descriptions, price, category) values" + data.map(item => (`("${item.name}", "${item.descriptions}", "${item.price}", "${item.category}")`)).join(", "))
  })
}

export const getAllData = async () => {
  return new Promise((resolve) {
    db.transaction(tx => {
      tx.executeSql("select * from menuitems", [], (_, { rows }) => {
        resolve(rows._array)
      })
    })
  })
}

export const filterData = async (activeCategory, input) => {
  return new Promise((resolve, reject) {
    db.transaction(tx => {
      tx.executeSql("select * from menuitems where name like '%" + input + "%' and category in (" + activeCategory.map(category => `"${category}"`).join(", ") + ")", [], (_, { rows }) => {
        resolve(rows._array)
      })
    })
  })
}