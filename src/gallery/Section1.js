
function Section1() {

    return (
        <div className="grid-wrapper pt-16 lg:pt-0">
            {
                PHOTOS.map((item)=>(
                    <div key={item.photo} className="big">
                        <img src={item.photo} />
                    </div>
                ))
            }
            {/* <div className="big">
                <img src="https://images.unsplash.com/photo-1541187714594-731deadcd16a?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="" />
            </div> */}
            {/* <div className="tall">
                <img src="https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80" alt="" />
            </div> */}
            {/* <div className="wide">
                <img src="https://images.unsplash.com/photo-1536466528142-f752ae7bdd0c?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" alt="" />
            </div> */}
        </div>
    );
}
const PHOTOS = [
    {
      photo: 'https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    },
    {
      photo: 'https://images.unsplash.com/photo-1624984673684-cb3dd0f56915?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    },
    {
        photo: 'https://images.unsplash.com/photo-1625061007525-ca4e7cf230bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      },
      {
        photo: 'https://images.unsplash.com/photo-1625069697199-25c4e974d093?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      },
      {
        photo: 'https://images.unsplash.com/photo-1624984673684-cb3dd0f56915?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      },
      {
        photo: 'https://images.unsplash.com/photo-1624984673684-cb3dd0f56915?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      },
  ];
export default Section1;