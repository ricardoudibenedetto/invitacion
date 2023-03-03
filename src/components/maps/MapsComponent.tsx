import React from 'react'

export const MapsComponent = () => {
  return (
    <div >
      <iframe 
        className='mapsCard'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.212796951837!2d-58.40169786965411!3d-34.699812317855084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccce04d1173fd%3A0x9ba15fc15f43643b!2sDAZ%2C%202%20de%20Mayo%202448%2C%20B1824%20Lan%C3%BAs%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1677861351790!5m2!1ses-419!2sar"
        loading="lazy" 
        ></iframe>
    </div>
  )
}
