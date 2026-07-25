const FilterItems = () =>{
    return(
        <div className="w-75 mx-auto my-4">
            <input className="form-control px-3 py-2" type="text" placeholder="نام دانش اموز را جست و جو کنید..." />
            <div>
                <button className="btn btn-secondary">مرتب سازی</button>
                <ul className="bg-black w-25 border rounded-3 p-0">
                    <li className="list-unstyled list-hover p-2 rounded-3 z-0 border-bottom">همه</li>
                    <li className="list-unstyled list-hover p-2 rounded-3 z-0 border-bottom">حاضر ها</li>
                    <li className="list-unstyled list-hover p-2 rounded-3 z-0">غایب ها</li>
                </ul>
            </div>
        </div>
    )
}
export default FilterItems