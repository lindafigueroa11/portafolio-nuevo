import "../style/Loader.css"
export default function Loader() {
  return (
    <div className="loader-screen" role="status" aria-label="Loading">
      <div className="loader-container">
        <span className="loader" />
      </div>
    </div>
  )
}
