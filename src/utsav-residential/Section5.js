function Section5() {
    return (
        <section className="p-4 pb-16 lg:px-32">
            <h3 className="heading font-bold mb-6">Development work...</h3>
            <div className="grid-wrapper pt-16 lg:pt-0">
            {
                PHOTOS.map((item)=>(
                    <div key={item.photo} className="big">
                        <img src={item.photo} />
                    </div>
                ))
            }
            </div>
        </section>
    );
}

export default Section5;

const PHOTOS = [
    {
      photo: '/images/utsav-residential/img1.jpeg',
    },
    {
      photo: '/images/utsav-residential/img2.jpeg',
    },
    {
        photo: '/images/utsav-residential/img3.jpeg',
      },
      {
        photo: '/images/utsav-residential/img4.jpeg',
      },
      {
        photo: '/images/utsav-residential/img5.jpeg',
      },
  ];