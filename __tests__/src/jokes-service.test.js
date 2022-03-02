import { fetchJoke } from "../../src/jokes-service";
import axios from 'axios';

jest.mock('axios');

describe('Chuck Norris jokes', async() => {
    test('Can fetch joke', () => {
        // Given
        const joke = {
            categories: [],
            created_at: '2020-01-05 13:42:28.984661',
            icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
            id: 'Md7Nw5rtQaC7hw2RhPF_xQ',
            updated_at: '2020-01-05 13:42:28.984661',
            url: 'https://api.chucknorris.io/jokes/Md7Nw5rtQaC7hw2RhPF_xQ',
            value: 'Chuck Norris can remove graffiti from the side of a building through micturition.'
          }
          const res = {
              data: joke
          }

          // When
          axios.get.mockResolvedValue(res);

          // Then
          await expect(fetchJoke()).resolves.toBe(joke);
    })

    test('Can handle failures while fetching jokes', async() => {
        axios.get.mockRejectedValue(new Error('failed to fetch joke'));
        try {
            await fetchJoke();
        } catch(err) {
            expect(err).toMatch('failed to fetch joke');
        }
    })
})
