import Dexie from 'dexie';

const db = new Dexie('cacheDatabase');
db.version(1).stores({
  cachePage:'++id,save_at,body,fromPath,toPath,toUrlFull',
});

const OpenCacheDatabase = () =>{
  db.open({ autoOpen: false }).then(()=>{
    console.log("DB Open ==>> Success")
  })
  .catch (function (err) {
    console.error('Failed to open db: ' + (err.stack || err));
  });
}

const ClosecacheDatabase = () =>{
  db.close().then(()=>{
    console.log("DB Close ==>> Success")
  })
  .catch (function (err) {
    console.error('Failed to close db: ' + (err.stack || err));
  });
  alert("Docies BD Close")  
}

const saveCachePage =(bodyJsonStr,fromPath,toPath,fullUrl)=>{

  const save_at=new Date().getTime();
  const saveBody ={
    "body":bodyJsonStr,
    "save_at":save_at,
    "fromPath":fromPath,
    "toPath":toPath,
    "toUrlFull":fullUrl
  }
  if(!db.isOpen()){
    console.log("Db is Close")
    OpenCacheDatabase()
  }
  console.log("Db is Open")
  db.cachePage.add(saveBody);
  console.log("save success")
}


/**
 * SLELECT シリーズ
 * 
 */
const getLatestSaveat = () =>{
  return db.cachePage.reverse().limit(1).toArray(li =>{
    const dictt = li[0]
    return Promise.resolve(dictt)
  }).catch(err =>{
    alert(err)
  })

} 

const getLatestSaveAtByCol = (target_col_name,condition) =>{
  if(!db.isOpen()){
    console.log("Db is Close")
    OpenCacheDatabase()
  }
  console.log("Db is Open")
  const debuglog = "target_col_name : "+target_col_name+" ===>> "+"condition : "+condition
  console.log(debuglog)
  return db.cachePage
    .where(target_col_name).equals(condition)
      .reverse().limit(1).toArray(
        li => {
          if(li.length <1){
            return Promise.resolve([])  
          }
          return Promise.resolve(li)
        }
      ).catch(errr =>{
        return Promise.reject(errr)
      })
}


const deleteCachePageOne = (condition_id)=>{
  return db.cachePage.delete(condition_id)
}

const getDeleteIndexGoBack =()=>{
    return db.cachePage.orderBy("id").keys(function(ids){
      const ids_size = ids.length
      if(ids_size == 0 || ids_size == undefined){
        throw new Error("failed.");
      }
      const id_end = ids.slice(-1)[0]
      return Promise.resolve(id_end)
    })
}

const deleteAtOnload =()=>{
      db.cachePage.orderBy("id").keys(function(ids){
          const ids_size = ids.length
          if(ids_size != 0 && ids_size > 2){
            const tmp_ids = ids.slice(0,ids_size-1)
            const id_start = tmp_ids[0]
            const id_end = ids.slice(-1)[0]
            db.cachePage.where("id").between(id_start,id_end).delete()
            
          }else if(ids_size <=1){
            return Promise.reject("")
          }
      })
}

const countCurrentCacheRecord =()=>{
    return db.cachePage.count( function(count_num){
      return Promise.resolve(count_num)
    })
}

const getArrayCOndition = (target_col_name,condition_url) => {
  return db.cachePage.where(target_col_name)
    .equalsIgnoreCase(condition_url).desc().limit(1).toArray(li=>{
      return Promise.resolve(li)
    })
}

const dropDexiesDB =() => {
  db.delete().then(() => {
    console.log("Database successfully deleted");
    }).catch((err) => {
        console.error("Could not delete database");
        console.error(err);
    }).finally(() => {
        // Do what should be done next...
    });
}

export default {
  countCurrentCacheRecord,deleteAtOnload,getDeleteIndexGoBack,
  deleteCachePageOne,saveCachePage,getArrayCOndition,ClosecacheDatabase,
  getLatestSaveat,OpenCacheDatabase,dropDexiesDB,getLatestSaveAtByCol
}