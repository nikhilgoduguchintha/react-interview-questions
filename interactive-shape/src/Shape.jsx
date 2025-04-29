import { useEffect, useRef, useState } from "react";

const Shape = ({ data }) => {
  const flattenedArray = data.flat(Infinity);
  const [selected, setSelected] = useState(new Set());
  const [isUnloading, setIsUnloading] = useState(false)
  const timerRef = useRef(null)
  const countOfVisibleBoxes = flattenedArray.filter(item => item!=0)
  const handleClick = (e) => {
    if(isUnloading){
        return
    }
    const { target } = e;
    const index = target.getAttribute("data-index");
    const status = target.getAttribute("data-status");
    if (!index || status === "hidden" || selected.has(index)) {
      return;
    }
    setSelected((prev) => new Set(prev.add(index)));
  };
  const unLoad = () => {
    setIsUnloading(true)
    let keys = Array.from(selected.keys())
    const removeNextKey = () => {
        if(keys.length){
           const currentKey =  keys.shift()
            setSelected( prev => {
                const updatedKeys = new Set(prev)
                updatedKeys.delete(currentKey)
                return updatedKeys
            })
        }else{
            setIsUnloading(false)
            clearTimeout(timerRef.current)
        }
        timerRef.current = setTimeout(removeNextKey,500)
    }
    timerRef.current = setTimeout(removeNextKey,100);
  }
  useEffect(() => {

    if(selected.size == countOfVisibleBoxes.length){
        console.log('size reached', selected,countOfVisibleBoxes)
        // selected.forEach(item => selected.delete(item))
        unLoad()
    }
  },[selected])
  return (
    <div className="box-container" onClick={handleClick}>
      {flattenedArray.map((digit, index) => {
        const status = digit === 1 ? "visible" : "hidden";
        const isSelected = selected.has(index.toString());
        return (
          <div
            key={index}
            className={`box ${status} ${isSelected ? 'selected' : ''}`}
            data-index={index}
            data-status={status}
          ></div>
        );
      })}
    </div>
  );
};

export default Shape;
