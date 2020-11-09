import {
  Injectable
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VentService {

  constructor() {}

  /**
   * GetVents
   */
  public GetVents(roomId?: string) {
    return {
      id: "D1.13",
      name: "D1 13",
      gridSize: [2, 4],
      ventGroups: [{
          id: 0,
          size: 2,
          vents: [{
            name: "Teacher Vent",
            claimed: true,
            claimRequests: [],
            claimedBy: {
              id: 12,
              name: "Jonh O'Donnel",
              role: "Teacher",
              class: "w12rt1"
            }
          }]
        },
        {
          id: 1,
          size: 1,
          vents: [{
              name: "G1-V1",
              claimed: false,
              claimRequests: [{
                id: 32,
                name: "Alphonsos Riviera",
                role: "Student",
                class: "w12rt1"
              }],
              claimedBy: {}
            },
            {
              name: "G1-V2",
              claimed: true,
              claimRequests: [],
              claimedBy: {
                id: 25,
                name: "George Wellington",
                role: "Student",
                class: "w12rt1"
              }
            },
            {
              name: "G1-V3",
              claimed: false,
              claimRequests: [],
              claimedBy: {}
            },
            {
              name: "G1-V4",
              claimed: true,
              claimRequests: [],
              claimedBy: {
                id: 25,
                name: "George Wellington",
                role: "Student",
                class: "w12rt1"
              }
            }
          ]
        },
        {
          id: 2,
          size: 1,
          vents: [{
              name: "G2-V1",
              claimed: false,
              claimRequests: [{
                id: 32,
                name: "Alphonsos Riviera",
                role: "Student",
                class: "w12rt1"
              }],
              claimedBy: {}
            },
            {
              name: "G2-V2",
              claimed: true,
              claimRequests: [],
              claimedBy: {
                id: 25,
                name: "George Wellington",
                role: "Student",
                class: "w12rt1"
              }
            },
            {
              name: "G3-V3",
              claimed: true,
              claimRequests: [],
              claimedBy: {
                id: 25,
                name: "George Wellington",
                role: "Student",
                class: "w12rt1"
              }
            },
            {
              name: "G4-V4",
              claimed: true,
              claimRequests: [],
              claimedBy: {
                id: 25,
                name: "George Wellington",
                role: "Student",
                class: "w12rt1"
              }
            }
          ]
        }
      ]
    };
  }
}
