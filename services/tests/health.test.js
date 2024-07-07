const axios = require('axios'); // Import Axios

describe('GET /health', () => {
  it('should return "healthy"', async () => {
    const response = await axios.get('http://localhost:3000/health'); // Use Axios directly

    expect(response.status).toBe(200);
    expect(response.data).toBe('healthy'); // Use response.data instead of response.body
  });
});
