import React from 'react'
import{AiOutlineArrowLeft,AiOutlineArrowRight} from "react-icons/ai"

const Footer = () => {
  return (
    <footer>
        <div className="scroll">
          <ul className="scroll-item">
            <li><a href=""><AiOutlineArrowLeft/></a></li>
            <li><a href="">1</a></li>
            <li><a href="">2</a></li>
            <li><a href="">3</a></li>
            <li><a href="">4</a></li>
            <li><a href="">5</a></li>
            <li><a href="">6</a></li>
            <li><a href="">7</a></li>
            <li><a href="">8</a></li>
            <li><a href="">9</a></li>
            <li><a href="">10</a></li>
            <li><a href=""><AiOutlineArrowRight/></a></li>
        
          </ul>
        </div>
    </footer>
  )
}

export default Footer