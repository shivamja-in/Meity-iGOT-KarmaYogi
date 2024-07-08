import React from 'react'
import { DeviceStatsSubCampaign } from '@/components/atoms/Campaigns/StatCampCard/DeviceStats/DeviceStatsSubCampaign'
import StatNav from '@/components/atoms/Campaigns/StatNav/StatNav'
export default function Page() {
  const subCampaignTitle = "Get 20% off on cart value"
  return (
    <div>
        <StatNav title={subCampaignTitle} time='12:00 AM' date='27/04/26' />

        <DeviceStatsSubCampaign />
  </div>
  )
}
