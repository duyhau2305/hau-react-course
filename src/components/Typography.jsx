/* eslint-disable react/prop-types */
function Typography({ content = 'Default Content' }) {
  console.log("typography: ", content)
  return (
    <div>
      {content}
    </div>
  )
}

export default Typography