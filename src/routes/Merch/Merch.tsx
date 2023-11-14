import { Button } from '../../shared/components/Button/Button';
import MerchItem from './MerchItem';

function Merch() {
  return (
    <div className="prose flex w-full max-w-full flex-col items-center justify-center px-20">
      <h1 className="py-8 text-center">Represent Planet 9 In Style</h1>
      <Button
        onClick={() =>
          window.open('https://www.redbubble.com/shop/ap/154372366', '_blank')
        }
      >
        Visit the Shop
      </Button>
      <h2>Some of our fan favorites</h2>
      <div className="mb-8 grid max-w-[1000px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <MerchItem
          item="Crew Neck"
          img="/assets/img/crewneck.png"
          link="https://www.redbubble.com/i/sweatshirt/Reconsider-Pluto-by-emilygorelik/154372366.COZDJ"
        />
        <MerchItem
          item="Bucket Hat"
          img="/assets/img/bucket-hat.png"
          link="https://www.redbubble.com/i/bucket-hat/Reconsider-Pluto-by-emilygorelik/154372366.51XZU"
        />
        <MerchItem
          item="Baseball Cap"
          img="/assets/img/baseball-cap.png"
          link="https://www.redbubble.com/i/hat/Reconsider-Pluto-by-emilygorelik/154372366.XAK6W"
        />
        <MerchItem
          item="Backpack"
          img="/assets/img/backpack.png"
          link="https://www.redbubble.com/i/backpack/Reconsider-Pluto-by-emilygorelik/154372366.K1KHE"
        />
        <MerchItem
          item="Sticker"
          img="/assets/img/sticker.png"
          link="https://www.redbubble.com/i/sticker/Reconsider-Pluto-by-emilygorelik/154372366.EJUG5"
        />
        <MerchItem
          item="Mug"
          img="/assets/img/mug.png"
          link="https://www.redbubble.com/i/mug/Reconsider-Pluto-by-emilygorelik/154372366.9Q0AD"
        />
      </div>
    </div>
  );
}

export default Merch;
