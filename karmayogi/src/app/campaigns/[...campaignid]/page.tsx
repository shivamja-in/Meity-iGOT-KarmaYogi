import React from 'react';
import CampCard from '@/components/atoms/Campaigns/CampCard/CampCard';
import CampSlider from '@/components/atoms/Campaigns/CampSlider/CampSlider';
// TODO implement integration

export default function Page() {
  const mockData = {
    title: "Diwali 2026",
    noOfSMS: 1,
    noOfEmail: 3,
    noOfWhatsapp: 2,
    noOfUsers: 45022,
    bgImgUrl: 'https://images.pexels.com/photos/790916/pexels-photo-790916.jpeg',
    blurred: true,
  };

  const whatsappCampaigns = [
    {
      campaignTitle: "Get 200rs offer",
      targetedUsers: 2392
    },
    {
      campaignTitle: "Diwali Special",
      targetedUsers: 3120
    }
  ];

  const emailCampaigns = [
    {
      campaignTitle: "Winter Sale",
      targetedUsers: 4520
    },
    {
      campaignTitle: "Year-End Clearance",
      targetedUsers: 6780
    }
  ];

  const smsCampaigns = [
    {
      campaignTitle: "Flash Discount",
      targetedUsers: 1234
    },
    {
      campaignTitle: "Limited Time Offer",
      targetedUsers: 5678
    }
  ];

  return (
    <section>
      <div>
        <CampCard
          title={mockData.title}
          noOfSMS={mockData.noOfSMS}
          noOfEmail={mockData.noOfEmail}
          noOfWhatsapp={mockData.noOfWhatsapp}
          noOfUsers={mockData.noOfUsers}
          bgImgUrl={mockData.bgImgUrl}
          blurred={mockData.blurred}
          isAPage
        />

        <div className='bg-black text-white'>
          <CampSlider campaignCards={whatsappCampaigns} campaignType='WA' />
          <CampSlider campaignCards={emailCampaigns} campaignType='EMAIL' />
          <CampSlider campaignCards={smsCampaigns} campaignType='SMS' />
        </div>

      </div>
    </section>
  );
}
