import React from 'react'
import FooterComponent from './component/Footer/FooterComponent'
import { FloatButton } from 'antd'
import PageMaintenance from './component/Maintenance/PageMaintenance'

function Realisation() {
  return (
    <div>
      <FloatButton.BackTop />
      <div>
        <PageMaintenance />
      </div>
        <div>
            <FooterComponent />
        </div>
    </div>
  )
}

export default Realisation