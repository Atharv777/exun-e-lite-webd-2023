import React, { useState } from 'react'

export default function App() {

    const colors = ["#FFFFFF", "#1a1a1a", "#845EC2", "#D65DB1", "#FF6F91", "#FF9671", "#FFC75F", "#FBEAFF", "#7DB0E0", "#E44145", "#00995B", "#57423F", "#5B8B00"]
    const [currentIndex, setCurrentIndex] = useState(0)

    return (
        <div className='main' style={{ backgroundColor: colors[currentIndex] }}>
            <h1>Background Color Changer</h1>

            <div className='color-box'>

                {
                    colors.map((item, ind) => {
                        return (
                            <div
                                onClick={() => { setCurrentIndex(ind) }}
                                style={{ backgroundColor: item, borderWidth: currentIndex === ind ? "3px" : undefined }}
                            ></div>
                        )
                    })
                }
            </div>
        </div >
    )
}
