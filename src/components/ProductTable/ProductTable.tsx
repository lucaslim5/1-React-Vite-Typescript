import { useEffect, useState } from "react"
import { Product } from "../../types/Products"
import { ProductService } from "../../services/ProductsService";
import { Button, Table } from "react-bootstrap";
import Loader from "../Loader/Loader";
import { ModalType } from '../../types/ModalTypes';
import ProductModal from "../ProductModal/ProductModal";
import EditButton from "../EditButton/EditButton";
import DeleteButton from "../DeleteButton/DeleteButton";



const ProductTable = () => {
    //var q va a contener los datos recibidos x la API
    const[products, setProducts]= useState<Product[]>([]);
    //var q muestra el componente Loader hasta q se reciban los datos de la API
    const[isLoading, setIsLoading]=useState(true);
    
    //var q va a actualizar los datos de la tabla luego de c/operacion exitosa
    const[refreshData, setRefreshData]=useState(false);

    //hook q se va a ejecutar c/vez q se renderice el componente
    //o refresData cambie de estado
    useEffect(()=> {
        //llamada a la fc para obtener todos los productos declarados en ProductService
        const fetchProducts=async () => {
            const products = await ProductService.getProducts();
            setProducts(products);
            setIsLoading(false);
        };

        fetchProducts();
    }, [refreshData]);
    //Test, log modificado parta mostrar datos de manera mas legible
    console.log(JSON.stringify(products, null, 2));
    
    //CONST para inicializar un producto x defecto y evitar 'undefined'
//cuando vayamos a crear un producto nuevo
    const initializableNewProduct = (): Product =>{
      return{
        id: 0,
        title: "",
        price: 0,
        description: "",
        category: "",
        image: "",
      };
    };
    //Prod seleccionado q se va a pasar como prop al Modal
    const  [product, setProduct]= useState<Product>(initializableNewProduct);
    //const para manejar el estado del modal
    const[showModal, setShowModal]= useState(false);
    const[modalType, setModalType]= useState<ModalType>(ModalType.NONE);
    const[title, setTitle]= useState("");

    //logica del modal
    const handleClick= (newTitle: string, prod: Product, modal:ModalType)=> {
      setTitle(newTitle);
      setModalType(modal);
      setProduct(prod);
      setShowModal(true);
    };

  return (
    <>
    <Button onClick={()=> handleClick("Nuevo prodcuto", initializableNewProduct(),
    ModalType.CREATE)}> Nuevo Producto </Button>
      {isLoading ? <Loader/>: (
        <Table hover>
          <thead>
            <tr>
              <th>Titulo</th>
              <th>Precio</th>
              <th>Descripcion</th>
              <th>Categoria</th>
              <th>Imagen</th>
              <th>Editar</th>
              <th>Borrar</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product =>(
              <tr key={product.id}>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>{product.category}</td>
                <td><img src={product.image} alt={product.title} 
                style={{width: '50px'}} /></td>

                <td><EditButton onClick={() => handleClick("Editar Producto", product, ModalType.UPDATE)}/></td>
                <td><DeleteButton onClick={() => handleClick("Borrar Producto", product, ModalType.DELETE)}/></td>


              </tr>
            ))}
          </tbody>
        </Table>
      )}

      {showModal && (
        <ProductModal
        show={showModal} 
        onHide={()=> setShowModal(false)}
        title={title}
        modalType={modalType}
        prod={product}
        refreshData={setRefreshData}
        />
      )}

    </>
  )
}

export default ProductTable