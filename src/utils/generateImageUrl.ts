// filename = wedding_01
// format = png | webp
// option = c_fill,w_400

function generateImageUrl({
  filename,
  format,
  option = 'q_auto,c_fill',
}: {
  filename: string
  format: 'png' | 'webp'
  option?: string
}) {
  return format == 'webp'
    ? `https://res.cloudinary.com/doqzdh1nl/image/upload/${option}/v1728728849/${format}/${filename}.${format}`
    : `https://res.cloudinary.com/doqzdh1nl/image/upload/${option}/v1728728825/${format}/${filename}0.${format}`
}

export default generateImageUrl
