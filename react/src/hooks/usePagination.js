import { useState } from 'react'

/*
using this hook I can return only required items and
keep track of current data and position
*/

/*
@param {Array} data - array of data
@param {number} pageSize - number of items to display in a page
@return {Object} - currentItems, currentPage, onNextPageClick, onPreviousPageClick
*/
const usePagination = ({ data = [], pageSize = 100 }) => {
  const [currentItems, setCurrentItems] = useState([])
  const [currentPage, setCurrentPageIndex] = useState(0)

  const onNextPageClick = () => {
    const newPageIndex = currentPage + 1
    if (newPageIndex * pageSize > data.length) {
      return
    }
    const newPageData = structuredClone(data).slice(
      newPageIndex * pageSize,
      pageSize
    )
    setCurrentItems(newPageData)
    setCurrentPageIndex(newPageIndex)
  }
  const onPreviousPageClick = () => {
    const newPageIndex = currentPage - 1
    if (newPageIndex < 0) {
      return
    }
    const newPageData = structuredClone(data).slice(
      newPageIndex * pageSize,
      pageSize
    )
    setCurrentItems(newPageData)
    setCurrentPageIndex(newPageIndex)
  }
  return {
    currentItems,
    currentPage,
    onNextPageClick,
    onPreviousPageClick,
  }
}

export default usePagination
