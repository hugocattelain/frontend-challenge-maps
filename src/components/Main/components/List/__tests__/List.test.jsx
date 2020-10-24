//Libraries
import React from 'react';
import { mount } from 'enzyme';

// Components
import { List } from '..';

describe('List', () => {
  const props = {
    items: [
      {
        alias: 'stadtklause-berlin',
        categories: [],
        coordinates: { latitude: 52.504779, longitude: 13.380618 },
        display_phone: '+49 30 51056381',
        distance: 2205.244050414826,
        id: '8uBE9ZgfZOM2z_Rllw478Q',
        image_url:
          'https://s3-media3.fl.yelpcdn.com/bphoto/vqFLzToYyFfAoYKlBRq0jA/o.jpg',
        is_closed: false,
        location: {
          address1: 'Bernburger Str. 35',
          city: 'Berlin',
          zip_code: '10963',
        },
        name: 'Stadtklause',
        phone: '+493051056381',
        price: '€',
        rating: 4.5,
        review_count: 173,
        transactions: [],
        url:
          'https://www.yelp.com/biz/stadtklause-berlin?adjust_creative=…ium=api_v3_business_search&utm_source=ors6zRuF6OV8AsDVv84wmA',
      },
    ],
  };

  it('should render correctly', () => {
    const wrapper = mount(<List {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
