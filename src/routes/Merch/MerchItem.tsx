interface props {
  img: string;
  item: string;
  link: string;
}

function MerchItem({ img, item, link }: props) {
  return (
    <div className="flex h-min flex-col rounded-xl bg-white p-4">
      <h2 className="my-2 font-jua text-black">{item}</h2>
      <img src={img} className="m-0 rounded-md" />
      <button
        className="btn ml-auto mt-2"
        onClick={() => window.open(link, '_blank')}
      >
        i want one
      </button>
    </div>
  );
}
export default MerchItem;
