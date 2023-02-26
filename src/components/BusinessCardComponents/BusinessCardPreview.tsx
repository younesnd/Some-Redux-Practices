type BusinessCardPreviewProps = {
  avatar: string
  name: string
  phoneNumber: string
  description: string
  address: string
  }
const BusinessCardPreview = (props : BusinessCardPreviewProps) => {
  const { avatar, name, phoneNumber, description, address } = props
      return (
        <div className="container drop-shadow-md ">
            <h2 className=" text-left text-2xl m-5 font-semibold">Business Card Preview</h2>
            <div className="container flex md:flex-row items-center">
                <div className="flex-[20%] ">
                    <img
                        className="w-28 h-28 object-cover rounded-full ml-6 "
                        src={avatar}
                        alt=""
                    />
                </div>
                <div className="details flex-[80%]">
                    <h2 className="text-left ml-7 text-trueGray-500">{name}</h2>
                    <p className='text-left ml-7 text-trueGray-500'>
                        {description}
                    </p>
                    <div className="article-footer flex items-center">
                        <address className="ml-7 text-trueGray-500">{address}</address>

                        <div className="share-icon ml-auto">
                            <p className="box-border mr-5 text-trueGray-500">{phoneNumber} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BusinessCardPreview
