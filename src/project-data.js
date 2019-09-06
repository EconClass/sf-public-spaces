// Data for SF Public spaces
// - Title 
// - Description
// - address street address
// - Images an array of urls 
//    - This could be an array of instagram embeds

// Mock up data from https://sf.curbed.com/maps/sf-parks-private-popos-public-owned

const data = [
  {
    title: 'Transamerica Redwood Park', 
    desc: "Located in the shadow of the Transamerica Pyramid, Redwood Park is one of the Financial District's greenest and most serene spots. Here, towering redwoods surround a half acre of statues and a large central water feature. Plus, the park is often empty, which means there's almost always a bench available for the hogging. Potential visitors take note: The park is closed every evening", 
    address: '600 Montgomery St San Francisco, CA', 
    geo: {lat: 0, lon: 0}, 
    images: ['transamerica-redwood-park.jpg'], 
    website: 'https://pyramidcenter.com/point-of-interest/redwood-park/',
    features: [ 
      'outdoors',
      'coffee'
    ] 
  },
  {
    title: 'Empire Park', 
    desc: 'Empire Park is a charming little oasis tucked away on Commercial Street, where Chinatown meets the Financial District. This space was once an alleyway, and now features plenty of seating, a fountain, and ample amounts of greenery. The park is a must-visit for anyone needing respite from the busy streets of downtown. Be sure to check out the charming water feature by Pepo Pichler in the courtyard.', 
    address: '642 Commercial St San Francisco, CA Visit Website', 
    geo: {lat: 0, lon: 0}, 
    images: ['empire-park.jpg'], 
    website:'https://www.artandarchitecture-sf.com/empire-park.html',
    features: [
      'outdoors', 
      'art', 
    ]
  },
  {
    title: '50 California Street', 
    desc:"Right across the street from 101 California's giant POPOS is the plaza at 50 California Street. This green space comes complete with a Starbucks and lots of areas to sit and watch the cable cars clang down California.", 
    address: '50 California St San Francisco, CA 94111', 
    geo: {lat: 0, lon: 0}, 
    images: ['50-california-st.png'], 
    features: [
      'outdoors',
      'toilet'
    ]
  },
  {
    title: 'Embarcadero Center Walkways', 
    desc:"Right across the street from 101 California's giant POPOS is the plaza at 50 California Street. This green space comes complete with a Starbucks and lots of areas to sit and watch the cable cars clang down California.", 
    address: '275 Battery St San Francisco, CA 94111', 
    geo: {lat: 0, lon: 0}, 
    images: ['transamerica-redwood-park.jpg'], 
    features: [ 
      'outdoors',
      'toilet', 
      'coffee'
    ]
  },
  {
    title: '343 Sansome Roof Garden', 
    desc:"The terrace at 343 Sansome Street is one of the FiDi's best-kept secrets, and it's also been called downtown's best outdoor lunch spot. It features tables, benches, planters filled with seasonal flowers, and views of a portion of the bay. Plenty of the space's Yelp reviews mention that it's never crowded. The space is open from 10 a.m. to 5 p.m. Monday through Friday.", 
    address: '343 Sansome St San Francisco, CA', 
    geo: {lat: 0, lon: 0}, 
    images: ['343-sansome-roof-garden.jpg'], 
    opens: '10am', 
    closes: '5pm',
    features: [
      'outdoors', 
    ]
  },
  {
    title: 'Garden Terrace at 150 California', 
    desc:"The Garden Terrace at 150 California has great views of the FiDi's gleaming office towers, and plenty of space to sit and take in some fresh air. A huge metal art installation adds some pizzazz to the terrace, and it's rarely ever crowded.", 
    address: '150 California St San Francisco, CA', 
    geo: {lat: 0, lon: 0}, 
    images: ['garden-terrace-at-150-california.jpg'], 
    features: [
      'outdoors',
      'art', 
      'coffee'
    ]
  },
  {
    title: '100 Pine', 
    desc:"101 California has the most expansive public plaza on California Street. The space features orderly rows of planters placed on terraced podiums, as well as a central fountain and seating.", 
    address: '101 California St San Francisco, CA', 
    geo: {lat: 0, lon: 0}, 
    images: ['101-california.jpg'], 
    features: [
      'outdoors', 
      'art', 
      'coffee'
    ]
  },
  {
    title: '101 California', 
    desc:"Tucked away amid a stand of soaring buildings, the urban garden at 100 Pine is accessible via the building lobby or through a not-so-obvious passageway on Front Street. It doesn’t get much in the way of sun, but last we checked in, there’s a cafe open till 3 p.m. as well as seating and planters.", 
    address: '100 Pine St San Francisco, CA', 
    geo: {lat: 0, lon: 0}, 
    images: ['100-pine.jpg'], 
    features: [ 
      'outdoors', 
    ]
  },
  {
    title: '525 Market Street Plaza', 
    desc:"The plaza at 525 Market is one of the most pleasant plazas in the Financial District, thanks in part to the new fountain near the sidewalk: a two-tiered circular water element made of clear acrylic. The plaza, which gets a lot of sunlight during the daytime, is surrounded by eateries, which makes it one of the most popular lunch spots in the FiDi.", 
    address: '525 Market St San Francisco, CA', 
    geo: {lat: 0, lon: 0}, 
    images: ['525-market-street-plaza.jpg'], 
    features: [ 
      'outdoors',
      'coffee'
    ]
  },
  {
    title: 'Citigroup Center', 
    desc:"The former Paris-London Bank building was built in 1912, and hollowed out to make way for public space at the base of the Citigroup Center. The elegant enclosed atrium features Moolicious (a crepe stand), a fountain, seating, and more than a dozen queen palms. It’s also smack dab in front of Bird’s new headquarters.", 
    address: '1 Sansome St San Francisco, CA', 
    geo: {lat: 0, lon: 0}, 
    images: ['citigroup-center.jpg'], 
    features: [
      'outdoors', 
      'power',
      'toilet', 
      'coffee'
    ]
  },
]

const titles = data.map(({title}) => title)

export default data
export { titles }