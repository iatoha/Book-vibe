import useBookList from "../../Hooks/useBookList";
import CardDefault from "../Card/CardDefault";
import CustomSpinner from "../CustomSpinner/CustomSpinner";

const CategoryList = (loading) => {

    const {bookList}  = useBookList();
    // console.log(bookList);

    if(!loading){
        return <CustomSpinner></CustomSpinner>
    }

    return (
        <>
        <h1 className=" text-5xl font-bold text-center my-20 ">Books</h1>
        <div className=" md:grid md:grid-cols-3 gap-6 py-6 md:w-[1260px] mt-12 mx-auto">
            {bookList.map((item) => <CardDefault item={item} loading={loading} key={item.bookId}></CardDefault>)}
        </div>
        </>
    );
};

export default CategoryList;