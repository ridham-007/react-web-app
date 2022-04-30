import React from 'react';
import styled from 'styled-components/macro';
import '../index.css';

const Main = styled.div`
 background-color: #000;
`;

const MainContent = styled.div`
 width: 100%;
 display: block;
 max-width: 1100px; 
 grid-gap: 8px;
 margin: 0 auto;
 color: #fff;
 padding: 45px;

@media screen and (max-width: 728px) {
    {
        display:block;
        padding:15px 45px;
    }
}
h3{
    text-align: center;
    padding-top: 25px;
    font-weight: bold;
}

p{
    margin-top:35px;
    margin-bottom: 0px;
    text-align: justify;
    font-size: 14px;
    
}

img{
    margin:15px;
    text-align:center;
}
`;

const TermsService = () => {
    return (
        <>
            <Main>
                <MainContent>
                    <div>
                        <h3>TERMS of Service</h3>
                        <p>TERMS AND CONDITIONS <br /></p>
                        <p>These terms and conditions shall apply to all orders entered into by and between any distributor or any end-user of the Goods, whichever the case may be (“Buyer”) and Tetsuuma Motors LTD (“Seller”). These terms and conditions and any Seller quotation form submitted herewith or separately shall be collectively referred to hereinafter as the “Agreement.” Seller shall accept orders, sell Goods, and do business only upon these terms and conditions. Any additional or different terms in Buyer’s purchase order or other purchase documentation are deemed material alterations to this Agreement, and Seller hereby gives notice of its objection to them. The term “Goods” means all items sold and/or provided by Seller to Buyer.</p>
                        <p>**Price.** All prices are subject to change. Prices also do not include any federal, state, or local taxes or other governmental charges upon or with respect to the sale, purchase, manufacture, delivery, storage, processing, use, or consumption of any of the Goods provided hereby. Prices are stated in U.S. dollars. PayPal and all major credit cards are accepted.</p>
                        <p>**Specifications.** Seller may, at its option, make changes in the designs, specifications or components of the Goods to improve the safety of such Goods, or if in Seller’s judgment, such changes will be beneficial to their operation, use, or image. Tetsuuma Motors LTD makes every effort to ensure that posted specifications, images, pricing and product availability are as correct and timely as possible. Tetsuuma Motors LTD reserves the right to make any and all changes deemed necessary in the course of business including but not limited to pricing, product specifications, quantities, and product availability.</p>
                        <p>**Shipping and Delivery.** Tetsuuma Motors LTD can ship anywhere there is a notable shipping service (i.e. UPS Ground, FedEx, DHL, etc.). Tetsuuma Motors LTD will not provide information about customs and international fees. Buyer is responsible for researching additional charges for customs and international delivery. Buyer is subject to these additional duty charges. Title to and risk of loss for the Goods shall pass to Buyer upon delivery of the Goods by Seller to the common carrier for delivery. All time frames provided by Seller, whether verbally or in writing, are good faith estimates of the expected delivery date for the Goods. Seller shall use commercially reasonable efforts to fill Buyer’s orders within the time stated but in no event shall Seller be liable for any damages associated with Seller’s inability to meet any such time frames or deadlines, including but not limited to incidental or consequential damages arising there from.</p>
                        <p>**Force Majuere.** Seller shall not be responsible for any delay in the delivery of, or failure to deliver, Goods due to causes beyond Seller’s reasonable control including, without limitation, acts of God, acts of war or terrorism, enemy actions, hostilities, strikes, labor difficulties, embargoes, non-delivery or late delivery of materials, parts and equipment or transportation delays not caused by the fault of Seller, delays caused by civil authorities, governmental regulations or orders, fire, lightening, natural disasters or any other cause beyond Seller’s reasonable control. In the event of any such delay, performance will be postponed by such length of time as may be reasonably necessary to compensate for the delay.</p>
                        <p>**Assembly.** If Buyer purchases any Goods that require assembly, Buyer shall, at its expense, make all arrangements and connections necessary to install and operate the Goods properly. Buyer shall assemble the Goods in accordance with any Seller instructions or recommendations and shall indemnify Seller against any and all damages, demands, suits, causes of action, claims and expenses (including actual attorneys’ fees and costs) arising directly or indirectly out of Buyer’s failure to properly install the Goods.</p>
                        <p>**Use of Goods.** Buyer is responsible for using and maintaining the Goods properly and safely in accordance with any required laws and/or as set forth in manuals and instruction sheets furnished by Seller.</p>
                        <p>**Warranty.**
                            Tetsuuma Motors LTD warrants that all new Tetsuuma Motors products are warranted to the Buyer against manufacturing defects in materials and/or workmanship for a period of (2) years from the date of delivery. The battery pack is warranted for (5) years from the date of delivery. The warranty period is calculated from the point of delivery. The original receipt of purchase is required to establish proof of purchase and must be provided to Tetsuuma Motors LTD for all warranty claims. Tetsuuma Motors LTD will require the customer to complete a MANDATORY standard procedure for warranty claims that will involve media such as photos and videos to help Tetsuuma Motors LTD after sales staff establish the fault with the product.</p>
                    </div>
                </MainContent>
            </Main>
        </>
    )
}

export default TermsService;
