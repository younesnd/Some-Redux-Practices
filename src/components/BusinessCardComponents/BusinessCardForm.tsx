import styles from './BusinessCardForm.module.css'

type BusinessCardFormProps = {
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  name: string
  phoneNumber: string
  description: string
  address: string
  }

const BusinessCardForm = (props:BusinessCardFormProps) => {
  const {
    name,
    phoneNumber,
    description,
    address,
    onInputChange,
    onFileUpload,
    } = props
  return (
    <div className=" container shadow-md">
      <h2 className="text-left text-2xl m-5 font-semibold">
        Business Card Form
      </h2>
      <form className="text-left m-5">
        <div className="flex flex-col ">
          <label className="  mb-3"> Avatar </label>
          <input className="mb-3 " type="file"  onChange={onFileUpload}/>
        </div>
        <div className="flex flex-col">
          <label className="  mb-3"> Name </label>
          <input className={styles.formInput} type="text" name="name" value={name} onChange={onInputChange} />
        </div>

        <div className="flex flex-col ">
          <label className=" mb-3"> Description </label>
          <input className={styles.formInput} type="text" name="description" value={description} onChange={onInputChange} />
        </div>
        <div className="flex flex-col ">
          <label className="  mb-3"> Phone Number </label>
          <input className={styles.formInput} type="text" name="phoneNumber" value={phoneNumber} onChange={onInputChange} />
        </div>
        <div className="flex flex-col ">
          <label className=" mb-3"> Address</label>
          <input className={styles.formInput} type="text" name="address" value={address} onChange={onInputChange} />
        </div>
      </form>
    </div>
  )
}

export default BusinessCardForm
