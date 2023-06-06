const navigation = () => {
  return [
    {
      sectionTitle: 'Apps & Pages'
    },
    {
      title: 'Home',
      icon: 'tabler:home',
      path: '/apps/Home'
    },
    {
      title: 'Instant Rate',
      icon: 'tabler:mail',
      path: '/apps/InstantRates'
    },
    {
      title: 'Spot Rate',
      icon: 'tabler:pennant-2',
      path: '/apps/SpotRate'
    },
    {
      title: 'My Bookings',
      icon: 'tabler:book',
      path: '/apps/Bookings'
    },
    {
      title: 'My Shipments',
      icon: 'tabler:package',
      path: '/apps/Shipments'
    },
    {
      title: 'Invoices',
      icon: 'tabler:file-dollar',
      path: '/apps/Invoices'
    }
  ]
}

export default navigation
