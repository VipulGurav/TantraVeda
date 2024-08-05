import { parseStringPromise } from 'xml2js';

export interface Region {
  SrNo: number;
  Name: string;
}

export const fetchRegions = async (): Promise<Region[]> => {
  const soapRequest = `
    <?xml version="1.0" encoding="utf-8"?>
    <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
      <soap12:Body>
        <GetRegions xmlns="http://smartlibraries.in/">
          <SrNo>0</SrNo>
        </GetRegions>
      </soap12:Body>
    </soap12:Envelope>`;

  try {
    const response = await fetch('http://smartlibraries.in/WebXSmartLibrary.asmx', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/soap+xml; charset=utf-8',
      },
      body: soapRequest,
    });

    const responseText = await response.text();

    // Parsing the response XML using xml2js
    const result = await parseStringPromise(responseText);
    const regionsData = result['soap:Envelope']['soap:Body'][0]['GetRegionsResponse'][0]['GetRegionsResult'][0]['Region'];

    const regionsArray: Region[] = regionsData.map((region: any) => ({
      SrNo: parseInt(region.SrNo[0], 10),
      Name: region.Name[0],
    }));

    return regionsArray;
  } catch (error) {
    console.error('Error fetching regions:', error);
    return [];
  }
};
