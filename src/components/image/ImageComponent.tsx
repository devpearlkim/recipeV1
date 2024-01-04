import axios from 'axios'
import React, { ChangeEvent, FormEvent, useState } from 'react'

const ImageComponent = () => {
  const [imageUrl, setImageUrl] = useState('')

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const imageInput = event.target.imageInput

    if (imageInput?.files && imageInput?.files[0]) {
      const file = imageInput.files[0]
      console.log(file)
      const response = await axios.get('http://localhost:8080/s3Url')
      const { url } = response.data
      const formData = new FormData()
      formData.append('file', file)
      // await axios.put(url, formData)
      await axios.put(url, file)

      const modifiedUrl = url.split('?')[0]
      setImageUrl(modifiedUrl)
    }
  }

  return (
    <div>
      <form id="imageForm" onSubmit={handleFormSubmit}>
        <input id="imageInput" name="imageInput" type="file" accept="image/*" />
        <button type="submit">Upload</button>
      </form>
      {imageUrl && <img src={imageUrl} alt="Uploaded" />}
      <img src="https://my-recipeheaven-bucket.s3.ap-northeast-2.amazonaws.com/8677f4c8316e13cf8316e38db8e3549a.png" />
    </div>
  )
}

export default ImageComponent
