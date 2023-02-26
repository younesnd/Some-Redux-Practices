import { useState } from 'react'
import { useImmer } from 'use-immer'
import BusinessCardForm from './BusinessCardForm'
import BusinessCardPreview from './BusinessCardPreview'
type BusinessCardState = {
  avatarFile?: File | null
  name: string
  phoneNumber: string
  description: string
  address: string
}
const BusinessCardEditor = () => {
  const [avatarPreview, setAvatarPreview] = useImmer('')
  const [form, setForm] = useImmer<BusinessCardState>({
    avatarFile: null,
    name: 'Enter your Name',
    phoneNumber: 'Number',
    description: 'Describe yourself',
    address: 'Your Address',
    })
  const onFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    setForm((state) => ({
      ...state,
      avatarFile: file,
    }))
    if (!file) {
      setAvatarPreview('')
      return
    }
    const reader = new FileReader()
    reader.addEventListener(
      'load',
      () => {
        const avatarPreview = reader.result as string
        setAvatarPreview(avatarPreview)
      },
      false
    )
    reader.readAsDataURL(file)
  }


  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="flex items-start">
      <BusinessCardForm
      name={form.name}
      description={form.description}
      address={form.address}
      phoneNumber={form.phoneNumber}
      onInputChange={onInputChange}
      onFileUpload={onFileUpload}
      />

      <BusinessCardPreview 
      avatar={avatarPreview}
      name={form.name}
      description={form.description}
      address={form.address}
      phoneNumber={form.phoneNumber}/>
    </div>
  )
}

export default BusinessCardEditor
