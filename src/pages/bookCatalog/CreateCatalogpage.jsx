import InputText from "../../components/Input";


function CreateCatalogPage(){
    return(
        <div className="flex ">
            <div className="bg-gray-100 flex-1 ms-5">
                <h1 className="text-3xl font-bold text-2xl">New Book Catalog</h1>
                <InputText name = {'Title'} text = {'Title'}/>
                <InputText name = {'Authors'} text = {'Authors'}/>
                <InputText name = {'ISBN'} text = {'ISBN'}/>
                <InputText name = {'Publisher'} text = {'Publisher'}/>
                <InputText name = {'Publication'} text = {'Publication'}/>
                <InputText name = {'Edition'} text = {'Edition'}/>
                <InputText name = {'Genre'} text = {'Genre'}/>
                <br />

            </div>
            <div className="bg-gray-100 flex-1 mt-10 mr-10">
            <InputText name = {'Langusge'} text = {'Langusge'}/>
            <InputText name = {'Number of Pages'} text = {'Number of Pages'}/>
            <InputText name = {'Cover Image Url'} text = {'Cover Image Url'}/>
            <InputText name = {'Shelf Lacatoin'} text = {'Shelf Lacatoin'}/>
            </div>
        </div>
    )
}
export default CreateCatalogPage;