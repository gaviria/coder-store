import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { itemType } from '../types/ItemList';

const data: itemType = {id: 1, title: 'Comida Perros 1', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo animi quos suscipit delectus similique. Nostrum reprehenderit...', price: 100, pictureUrl:'images/comidaitem1.jpg'};

const ItemDetailContainer = () => {
    const [itemDetail, setItemDetail] = useState({id:0, title:'', description: '', price: 0, pictureUrl:''});

    useEffect(()=>{
        const getItem = new Promise ((resolve, reject)=>{
            setTimeout(()=>{
				if(data.id > 0) {
					resolve(data);
				} else {
					reject("No hay Datos");
				}
			}, 2000);
        });
        getItem.then(res => setItemDetail(res)).catch(reject => reject);
    },[]);

    const onAdd = (cantidadSolicitada: number) => {
      console.log("Se solicitaron: ", cantidadSolicitada);
    };

  return (
    <div className='flex items-center justify-center'>
        <ItemDetail
            item={itemDetail}
            onAdd={onAdd}
        />
    </div>
  )
}

export default ItemDetailContainer