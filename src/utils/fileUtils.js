import { readdirSync } from 'fs';

let base_dir = './src/'

export function getFileName(dir){
  return readdirSync(base_dir.concat(dir));
}

export function folderLoader( dir ){
  let list = []

  getFileName(dir).forEach( e => {
    let list_item = list.find( i => i.text == e.slice(0, 7) )
    if ( !list_item ){
      list_item = {
        text: e.slice(0, 7),
        items: []
      }
      list.push(list_item)
    }

    list_item.items.push( 
      { text: e.slice(0, -3), link: `/${dir}/${e.slice(0, -3)}` }
    )
  })
  return list
}