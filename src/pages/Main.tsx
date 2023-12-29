import React from 'react'
import Header from '../components/common/Header'
import MainSearch from '../components/main/MainSearch'
import Footer from '../components/common/Footer'
import RankItem from '../components/main/RankItem'
import { Link } from 'react-router-dom'

function Main() {
  return (
    <div>
      <MainSearch />
      {/* 현재 이미지 -> 우선순위 낮음: caroucel*/}
      <div className="flex items-center justify-center mt-10 mb-16">
        <Link to="/category/크리스마스">
          <img
            src="\src\assets\main\caroucel_1.jpg"
            alt=""
            className="w-[64rem]"
          />
        </Link>
      </div>

      {/* 경로변경필요 */}
      <span className="flex flex-col items-center text-2xl font-bold my-7">
        <Link to="/search">
          <p className="text-center w-full">이달의 인기 레시피 {'>'}</p>
        </Link>
      </span>
      <RankItem />
      {/* 경로변경필요 */}
      <span className="flex flex-col items-center text-2xl font-bold my-7">
        <Link to="/category/해산물">
          <p className="w-full text-center">바다를 품은 레시피 {'>'}</p>
        </Link>
      </span>
      <RankItem />
    </div>
  )
}

export default Main
