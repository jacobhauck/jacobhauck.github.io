import Link from "next/link"
import Head from "next/head";
import Layout from "@/components/layout";
import { getTopicData } from "@/lib/content";
import tableStyle from "@/styles/table.module.css";
import utilStyle from "@/styles/utils.module.css";


export async function getStaticProps(){
    const topicData = getTopicData(["miscellany"]);
    return {
        props: {
            topicData
        }
    }
}

export default function Post({ topicData }) {
    return (<>
    <Head><title>Custom PC</title></Head>
    <Layout category={"miscellany"} topics={topicData}>
    <p>
        Right now I don't have much to share other than this, {}
        <Link href="https://pcpartpicker.com/list/Lc9Y6r">my new PC build</Link>.
    </p>
    <table className={tableStyle.head}>
    <thead>
        <tr>
        <th>Component</th>
        <th>Item</th>
        <th>Price</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td className="pcpp-part-list-type">CPU</td>
        <td className="pcpp-part-list-item"><a href="https://pcpartpicker.com/product/ZbddnQ/intel-core-i7-12700k-36-ghz-8-core-processor-bx8071512700k">Intel Core i7-12700K 3.6 GHz 12-Core Processor</a></td>
        <td className="pcpp-part-list-price">
            $241.82
        </td>
        </tr>
        <tr>
        <td className="pcpp-part-list-type">CPU Cooler</td>
        <td className="pcpp-part-list-item"><a href="https://pcpartpicker.com/product/c7wypg/arctic-liquid-freezer-ii-240-a-rgb-488-cfm-liquid-cpu-cooler-acfre00093a">ARCTIC Liquid Freezer II 240 A-RGB 48.8 CFM Liquid CPU Cooler</a></td>
        <td className="pcpp-part-list-price">
            $105.99
        </td>
        </tr>
        <tr>
        <td className="pcpp-part-list-type">Motherboard</td>
        <td className="pcpp-part-list-item"><a href="https://pcpartpicker.com/product/mYnypg/gigabyte-z790-gaming-x-ax-atx-lga1700-motherboard-z790-gaming-x-ax">Gigabyte Z790 GAMING X AX ATX LGA1700 Motherboard</a></td>
        <td className="pcpp-part-list-price">
            $229.99
        </td>
        </tr>
        <tr>
        <td className="pcpp-part-list-type">Memory</td>
        <td className="pcpp-part-list-item"><a href="https://pcpartpicker.com/product/RXGbt6/gskill-trident-z5-rgb-32-gb-2-x-16-gb-ddr5-6400-cl32-memory-f5-6400j3239g16gx2-tz5rk">G.Skill Trident Z5 RGB 32 GB (2 x 16 GB) DDR5-6400 CL32 Memory</a></td>
        <td className="pcpp-part-list-price">
            $119.99
        </td>
        </tr>
        <tr>
        <td className="pcpp-part-list-type">Storage</td>
        <td className="pcpp-part-list-item"><a href="https://pcpartpicker.com/product/Fv8j4D/samsung-970-evo-plus-2-tb-m2-2280-nvme-solid-state-drive-mz-v7s2t0bam">Samsung 970 Evo Plus 2 TB M.2-2280 PCIe 3.0 X4 NVME Solid State Drive</a></td>
        <td className="pcpp-part-list-price">
            $107.99
        </td>
        </tr>
        <tr>
        <td className="pcpp-part-list-type">Video Card</td>
        <td className="pcpp-part-list-item"><a href="https://pcpartpicker.com/product/rdjBD3/asus-tuf-gaming-oc-geforce-rtx-4070-ti-12-gb-video-card-tuf-rtx4070ti-o12g-gaming">Asus TUF GAMING OC GeForce RTX 4070 Ti 12 GB Video Card</a></td>
        <td className="pcpp-part-list-price">
            $819.99
        </td>
        </tr>
        <tr>
        <td className="pcpp-part-list-type">Case</td>
        <td className="pcpp-part-list-item"><a href="https://pcpartpicker.com/product/Hwkj4D/lian-li-pc-o11dx-atx-full-tower-case-pc-o11dx">Lian Li PC-O11 Dynamic ATX Full Tower Case</a></td>
        <td className="pcpp-part-list-price">
            $120.98
        </td>
        </tr>
        <tr>
        <td className="pcpp-part-list-type">Power Supply</td>
        <td className="pcpp-part-list-item"><a href="https://pcpartpicker.com/product/26rRsY/corsair-rm850x-2021-850-w-80-gold-certified-fully-modular-atx-power-supply-cp-9020200-na">Corsair RM850x (2021) 850 W 80+ Gold Certified Fully Modular ATX Power Supply</a></td>
        <td className="pcpp-part-list-price">
            $147.99
        </td>
        </tr>
        <tr>
        <td className="pcpp-part-list-type">Operating System</td>
        <td className="pcpp-part-list-item"><a href="https://pcpartpicker.com/product/dKkWGX/microsoft-windows-11-home-oem-dvd-64-bit-kw9-00633">Microsoft Windows 11 Home OEM - DVD 64-bit</a></td>
        <td className="pcpp-part-list-price">
            $119.43
        </td>
        </tr>
        <tr>
        <td className="pcpp-part-list-type">Case Fan</td>
        <td className="pcpp-part-list-item"><a href="https://pcpartpicker.com/product/QpH7YJ/arctic-p12-pst-a-rgb-0db-488-cfm-120-mm-fan-acfan00231a">ARCTIC P12 PST A-RGB 0dB 48.8 CFM 120 mm Fan</a></td>
        <td className="pcpp-part-list-price">
            $16.99
        </td>
        </tr>
        <tr>
        <td className="pcpp-part-list-type">Case Fan</td>
        <td className="pcpp-part-list-item"><a href="https://pcpartpicker.com/product/FQ6p99/arctic-p12-pst-a-rgb-0db-488-cfm-120-mm-fans-3-pack-acfan00232a">ARCTIC P12 PST A-RGB 0dB 48.8 CFM 120 mm Fans 3-Pack</a></td>
        <td className="pcpp-part-list-price">
            $42.99
        </td>
        </tr>
        <tr>
        <td className="pcpp-part-list-type">Case Fan</td>
        <td className="pcpp-part-list-item"><a href="https://pcpartpicker.com/product/FQ6p99/arctic-p12-pst-a-rgb-0db-488-cfm-120-mm-fans-3-pack-acfan00232a">ARCTIC P12 PST A-RGB 0dB 48.8 CFM 120 mm Fans 3-Pack</a></td>
        <td className="pcpp-part-list-price">
            $42.99
        </td>
        </tr>
        <tr className={tableStyle.midruleBelow}>
        <td className="pcpp-part-list-type">Monitor</td>
        <td className="pcpp-part-list-item">AOC 27G2SP Monitor</td>
        <td className="pcpp-part-list-price">$161.99</td>
        </tr>
        <tr>
        <td></td>
        <td className="pcpp-part-list-total">Total</td>
        <td className="pcpp-part-list-total-price">$2279.13</td>
        </tr>
        <tr className={tableStyle.lastRow}>
        <td></td>
        <td className={utilStyle.noteText}>Prices <strong>do not</strong> include shipping, taxes, rebates, and discounts. Generated by <a href="https://pcpartpicker.com">PCPartPicker</a> 2023-07-13 21:53 EDT-0400.</td>
        <td></td>
        </tr>
    </tbody>
    </table>
    </Layout>
    </>);
}