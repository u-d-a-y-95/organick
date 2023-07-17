import Image from "next/image";

const TH = ({ label }) => {
  return <th className="border p-3 px-6">{label}</th>;
};

export default function CartPage() {
  return (
    <div className="flex flex-col sm:flex-row p-5 gap-10 container mx-auto justify-between my-20">
      <div>
        <div className=" text-2xl font-semibold my-5">Products</div>
        <table className="border">
          <thead>
            <tr>
              <TH label="#" />
              <TH label="Image" />
              <TH label="Name" />
              <TH label="Price" />
              <TH label="Quantity" />
              <TH label="Total" />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4">1</td>
              <td className="">
                <Image
                  src="/img/dummy-product.png"
                  alt="product"
                  width={100}
                  height={100}
                />
              </td>
              <td className=" px-4">Health Pistachios</td>
              <td className=" px-4">$250</td>
              <td className=" px-4">
                <button className=" border border-primary rounded  text-primary w-6">
                  -
                </button>
                <span className=" mx-2 p-2 min-w-20 inline-block">2</span>
                <button className="border-none bg-primary text-white w-6 rounded">
                  +
                </button>
              </td>
              <td className=" px-4">$500</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <div className="text-center text-2xl font-semibold">Order Summary</div>
        <div>
          <label className="">Promo Code</label>
          <div>
            <input
              placeholder="enter promo code"
              className="border p-3 border-e-0"
            />
            <button className="border-none p-3 bg-primary text-white px-4 w-[200px] rounded-e">
              Submit
            </button>
          </div>
        </div>
        <div className="flex justify-end my-16">
          <table>
            <tbody>
              <tr>
                <td className="w-64 font-semibold">Sub Total</td>
                <td className="text-right">$500</td>
              </tr>
              <tr>
                <td>Shipping Cost</td>
                <td className="text-right">50</td>
              </tr>
              <tr>
                <td>Vat</td>
                <td className="text-right">50</td>
              </tr>
              <tr>
                <td>Discount</td>
                <td className="text-right">100</td>
              </tr>
              <tr className="border-t">
                <td className="font-bold text-xl">Total</td>
                <td className="font-bold text-xl">500</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <button className="bg-primary text-white w-full p-3">Checkout</button>
        </div>
      </div>
    </div>
  );
}
