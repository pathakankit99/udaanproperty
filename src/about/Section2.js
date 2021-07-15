function Section2() {
    return (
        <section style={{minHeight: "100vh"}} className="rounded-t-3xl location p-4 lg:px-32 bg-white lg:bg-gray-900">
            <h3 className="heading font-bold mb-6 text-gray-900 lg:text-white">The Team</h3>
            <div className="flex flex-wrap justify-between items-center bg-green-200 mb-4 shadow-xl ">
                <div className="h-full w-full md:w-4/12 overflow-hidden">
                    <img className="w-full h-full object-cover " src="/images/sanjay_singh.png"/>
                </div>
                <div className="flex-1 p-4 border-green-600 md:border-l-4">
                    <h3 className="heading2">Sanjay Singh</h3>
                    <div className="inline-block rounded-xl mb-6 text-indigo-200 bg-gray-900 px-2 py-1">CEO/Founder</div>
                    <p>Sanjay Singh is the founder and director of Udaan Properties. With over 10 years of on ground experience in the real estate industry he leads the organization from the front.
                        The passion he has for his work led him to create and organization that focuses on customer centric properties and township.
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap justify-between items-center bg-blue-200 mb-4 shadow-xl ">
                <div className="h-full w-full md:w-4/12 overflow-hidden">
                    <img className="w-full h-full object-cover " src="/images/sanjay_goel.png"/>
                </div>
                <div className="flex-1 p-4 border-blue-600 md:border-l-4">
                    <h3 className="heading2">Sanjay Goel</h3>
                    <div className="inline-block rounded-xl mb-6 text-indigo-200 bg-gray-900 px-2 py-1">CO</div>
                    <p></p>
                </div>
            </div>

            <div className="flex flex-wrap justify-between items-center bg-yellow-200 mb-4 shadow-xl ">
                <div className="h-full w-full md:w-4/12 overflow-hidden">
                    <img className="w-full h-full object-cover " src="/images/biswajit_mandal.png"/>
                </div>
                <div className="flex-1 p-4 border-yellow-600 md:border-l-4">
                    <h3 className="heading2">Biswajit Mandal</h3>
                    <div className="inline-block rounded-xl mb-6 text-indigo-200 bg-gray-900 px-2 py-1">Marketing Manager</div>
                    <p>Biswajit Mandal is Udaan Properties Marketing Manager. As our Marketing Manager, Biswajit focuses on Ethical and factual marketing that helps our company to develop good client relation.</p>
                </div>
            </div>
        </section>
    );
}

export default Section2;