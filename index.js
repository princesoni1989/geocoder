/**
 * Geo code class with utilities method
 */
class GeoCoder {
    constructor(unit) {
        this.unit = unit
    }

    /**
     * Get distance between points based on unit
     * Units -
     *  - Kilometers - K
     *  - Miles - M
     *  - Nautical Miles - N
     * @param params
     * @param unit
     * @returns {number}
     */
    getDistanceBetweenPoints(params, unit = this.unit) {
        const {lat1, lat2, lon1, lon2} = params;
        let distance = 0;
        if ((lat1 == lat2) && (lon1 == lon2)) return distance;
        else {
            const radiansLat1 = Math.PI * lat1 / 180;
            const radiansLat2 = Math.PI * lat2 / 180;
            const diffLongs = (lon1 - lon2);
            const diffTheta = Math.PI * diffLongs / 180;
            distance = Math.sin(radiansLat1) * Math.sin(radiansLat2) + Math.cos(radiansLat1) * Math.cos(radiansLat2) * Math.cos(diffTheta);
            if (distance > 1) {
                distance = 1;
            }
            distance = Math.acos(distance);
            distance = distance * 180 / Math.PI;
            distance = distance * 60 * 1.1515;
            return this.getAbsDistance(this.convertToUnit(unit, distance));
        }
    }

    /**
     * Get absolute distance between points
     * @param distance
     * @param val
     * @returns {*|string}
     */
    getAbsDistance(distance, val = 2) {
        return distance.toFixed(val)
    }

    /**
     * Convert to given unit
     * * Units -
     *  - Kilometers - K
     *  - Miles - M
     *  - Nautical Miles - N
     * @param unit
     * @param distance
     * @returns {number|*}
     */
    convertToUnit(unit, distance) {
        switch (unit) {
            case 'K':
                return distance = distance * 1.609344;
            case 'N':
                distance = distance * 0.8684;
            case 'M':
                return distance;
            default:
                return distance
        }
    }

    /**
     * Check if points have distance in the range of input
     * @param distance
     * @param params
     * @returns {boolean}
     */
    checkPointsAtDistance({distance, ...params}) {
        const calculatedDistance = parseInt(this.getDistanceBetweenPoints(params))
        return distance > calculatedDistance;
    }
}

module.exports = GeoCoder;