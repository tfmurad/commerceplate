"use client"
// import { Tab } from '@headlessui/react'
// import { useState } from 'react'

// const Tabs = () => {
//   const product = {
//     description: '<p>This is the <strong>product</strong> description.</p>',
//     moreInfo: '<p>More information about the product.</p>',
//   };

//   return (
//     <Tab.Group>
//       <Tab.List className="flex gap-x-4 border-b-2 focus:outline-none">
//         <Tab className={({ selected }) => `${selected ? 'border-t-2 border-l-2 border-r-2 border-b-0' : ''} px-6 rounded-tl-md rounded-tr-md`} >Description</Tab>
//         <Tab className={({ selected }) => `${selected ? 'border-t-2 border-l-2 border-r-2 border-b-0' : ''} px-6 rounded-tl-md rounded-tr-md`} >More Info</Tab>
//       </Tab.List>
//       <Tab.Panels className="border-l-2 border-r-2 border-b-2 rounded-bl-md rounded-br-md roun p-6">
//       <Tab.Panel>
//           <div dangerouslySetInnerHTML={{ __html: product.description }} />
//         </Tab.Panel>
//         <Tab.Panel>
//           <div dangerouslySetInnerHTML={{ __html: product.moreInfo }} />
//         </Tab.Panel>
//       </Tab.Panels>
//     </Tab.Group>
//   )
// }

// export default Tabs


// Import the necessary modules
import { Tab } from '@headlessui/react';

// Your Tabs component
const Tabs = () => {
  const content: string =
  `<div>
  <p>This is the product description.</p>
  </div>
  <hr />
  <div>
  <p>More information about the product.</p>
</div>`;

  // Split the HTML content based on the separator class
  const contentArray = content.split(`<hr />`);
  console.log(contentArray)

  return (
    <Tab.Group>
      <Tab.List className="flex gap-x-4 border-b-2 focus:outline-none">
        <Tab className={({ selected }) => `${selected ? 'border-t-2 border-l-2 border-r-2 border-b-0' : ''} px-6 rounded-tl-md rounded-tr-md`} >Description</Tab>
        <Tab className={({ selected }) => `${selected ? 'border-t-2 border-l-2 border-r-2 border-b-0' : ''} px-6 rounded-tl-md rounded-tr-md`} >More Info</Tab>
      </Tab.List>
      <Tab.Panels className="border-l-2 border-r-2 border-b-2 rounded-bl-md rounded-br-md p-6">
        <Tab.Panel>
          <div dangerouslySetInnerHTML={{ __html: contentArray[0] }} />
        </Tab.Panel>
        <Tab.Panel>
          <div dangerouslySetInnerHTML={{ __html: contentArray[1] }} />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}

export default Tabs;

