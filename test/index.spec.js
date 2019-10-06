const should = require('should');
const GeoCoder = require('../index');
const testData = require('./testData.json').data

/**
 * Test cases for Geo Coder
 */
describe('GeoCoder', function () {
    /**
     * Positive test cases
     */
    describe('Positive cases for GeoCoder', function () {
        const fixedLat1 = 53.339428
        const fixedLon1 = -6.257664
        it('should calculate distance between two points in kilometers', async () => {
            const coder = new GeoCoder('K')
            const {latitude: lat2, longitude: lon2} = testData[0]
            const geoObj = {
                lat1: fixedLat1,
                lon1: fixedLon1,
                lat2,
                lon2
            }
            const distance = coder.getDistanceBetweenPoints(geoObj)
            distance.should.be.a.String()
            distance.should.be.exactly('41.77')
        });
        it('should calculate distance between two points in miles', async () => {
            const coder = new GeoCoder('M')
            const {latitude: lat2, longitude: lon2} = testData[0]
            const geoObj = {
                lat1: fixedLat1,
                lon1: fixedLon1,
                lat2,
                lon2
            }
            const distance = coder.getDistanceBetweenPoints(geoObj)
            distance.should.be.a.String()
            distance.should.be.exactly('25.95')
        });
        it('should calculate distance between two points in nautical miles ', async () => {
            const coder = new GeoCoder('N')
            const {latitude: lat2, longitude: lon2} = testData[0]
            const geoObj = {
                lat1: fixedLat1,
                lon1: fixedLon1,
                lat2,
                lon2
            }
            const distance = coder.getDistanceBetweenPoints(geoObj)
            distance.should.be.a.String()
            distance.should.be.exactly('22.54')
        });
        it('should filter points based out of distance', async () => {
            const coder = new GeoCoder('K')
            const filteredPoints = testData.filter(point => {
                const {latitude: lat2, longitude: lon2} = point
                const geoObj = {
                    lat1: fixedLat1,
                    lon1: fixedLon1,
                    lat2,
                    lon2,
                    distance: 100
                }
                return coder.checkPointsAtDistance(geoObj)
            })
            filteredPoints.should.be.a.Array()
            filteredPoints.length.should.be.exactly(16)
        });
    });
});