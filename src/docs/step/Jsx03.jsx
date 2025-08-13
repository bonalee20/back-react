// jsx03
// 이름과 나이 만나이, 메세지를 만들고 /
// 화면에 랜더링시키기

const Jsx03 = () => {
  const name = "이영서"
  const age = 24
  const realAge = age -1
  return(
    <>
    <p>{name}</p>
    <p>{age}살</p>
    <p>만 {realAge}살</p>
    <p>메세지: **</p>
    </>
  )
}
export default Jsx03



