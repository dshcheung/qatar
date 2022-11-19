// findCombinations
const findCombination = (originalArr, combo) => {
  const results = []
  const temp = []
  temp.length = combo

  const combine = (input, len, start) => {
    if (len === 0) {
      results.push([...temp])
      return
    }

    for (let i = start; i <= input.length - len; i += 1) {
      temp[temp.length - len] = input[i]
      combine(input, len - 1, i + 1)
    }
  }

  combine(originalArr, combo, 0)

  return results
}

// Create, Send, Confirm Bet
const generateSlip = (inputIds) => {
  // Tick Odds
  inputIds.forEach((id) => {
    $(id).trigger('click')
  })

  // Add Slip
  addslip('')

  // Mark All Up
  for (let i = 0; i < inputIds.length; i += 1) {
    OnClickAllUpButton(i)
  }

  // Create Add Up Slip
  CreateAndAddAllUp()

  // Remove Single Slip
  for (let i = 0; i < inputIds.length; i += 1) {
    DeleteBetlineWithIndex(0, true)
  }

  // Preview Bet
  OnClickPreview()

  // Confirm Bet
  setTimeout(() => {
    OnClickConfirmBet()
  }, 1000)

  // Close Confirmation
  setTimeout(() => {
    OnClickClose()
    console.log('Bet Placed')
  }, 2000)
}

// GROUP A
const NED_QAT = '#tourn_GPF_50003675_1_0104_79327019_0_5_c'
const QAT_NED = '#tourn_GPF_50003675_1_0401_79327019_0_8_c'

// GROUP B
const ENG_USA = '#tourn_GPF_50003675_2_0102_79325019_0_2_c'

// GROUP C
const ARG_KSA = '#tourn_GPF_50003675_3_0104_79322019_0_3_c'

// GROUP D
const FRA_TUN = '#tourn_GPF_50003675_4_0103_79320019_0_9_c'
const TUN_FRA = '#tourn_GPF_50003675_4_0301_79320019_0_12_c'
const TUN_DEN = '#tourn_GPF_50003675_4_0302_79320019_0_11_c'

// GROUP E
const ESP_CRC = '#tourn_GPF_50003675_5_0104_79321019_0_10_c'
const ESP_GER = '#tourn_GPF_50003675_5_0102_79321019_0_11_c'

// GROUP F
const MAR_BEL = '#tourn_GPF_50003675_6_0301_79326019_0_10_c'
const BEL_MAR = '#tourn_GPF_50003675_6_0103_79326019_0_3_c'

// GROUP G
const SRB_BRA = '#tourn_GPF_50003675_7_0301_79324019_0_7_c'
const CMR_BRA = '#tourn_GPF_50003675_7_0401_79324019_0_4_c'

// GROUP H
const POR_URU = '#tourn_GPF_50003675_8_0102_79323019_0_9_c'

// 6x1
const combination01F6x1 = () => {
  const teams = [NED_QAT, ENG_USA, ARG_KSA, FRA_TUN, ESP_CRC, BEL_MAR, SRB_BRA, POR_URU]
  const combinations = findCombination(teams, 6)

  combinations.forEach((combination, i) => {
    setTimeout(() => {
      generateSlip(combination)
      console.log('Starting Combination', i + 1)
    }, 5000 * i)
  })
}

const combination02F6x1 = () => {
  const teams = [NED_QAT, ENG_USA, ARG_KSA, FRA_TUN, ESP_CRC, MAR_BEL, SRB_BRA, POR_URU]
  const combinations = findCombination(teams, 6)

  combinations.forEach((combination, i) => {
    setTimeout(() => {
      generateSlip(combination)
      console.log('Starting Combination', i + 1)
    }, 5000 * i)
  })
}

const combination03F6x1 = () => {
  const teams = [NED_QAT, ENG_USA, ARG_KSA, FRA_TUN, ESP_GER, BEL_MAR, SRB_BRA, POR_URU]
  const combinations = findCombination(teams, 6)

  combinations.forEach((combination, i) => {
    setTimeout(() => {
      generateSlip(combination)
      console.log('Starting Combination', i + 1)
    }, 5000 * i)
  })
}

const combination04F6x1 = () => {
  const teams = [NED_QAT, ENG_USA, ARG_KSA, FRA_TUN, ESP_GER, MAR_BEL, SRB_BRA, POR_URU]
  const combinations = findCombination(teams, 6)

  combinations.forEach((combination, i) => {
    setTimeout(() => {
      generateSlip(combination)
      console.log('Starting Combination', i + 1)
    }, 5000 * i)
  })
}

const combination05F6x1 = () => {
  const teams = [NED_QAT, ENG_USA, ARG_KSA, TUN_FRA, ESP_CRC, BEL_MAR, SRB_BRA, POR_URU]
  const combinations = findCombination(teams, 6)

  combinations.forEach((combination, i) => {
    setTimeout(() => {
      generateSlip(combination)
      console.log('Starting Combination', i + 1)
    }, 5000 * i)
  })
}

const combination06F6x1 = () => {
  const teams = [NED_QAT, ENG_USA, ARG_KSA, TUN_FRA, ESP_CRC, MAR_BEL, SRB_BRA, POR_URU]
  const combinations = findCombination(teams, 6)

  combinations.forEach((combination, i) => {
    setTimeout(() => {
      generateSlip(combination)
      console.log('Starting Combination', i + 1)
    }, 5000 * i)
  })
}

const combination07F6x1 = () => {
  const teams = [NED_QAT, ENG_USA, ARG_KSA, TUN_FRA, ESP_GER, BEL_MAR, SRB_BRA, POR_URU]
  const combinations = findCombination(teams, 6)

  combinations.forEach((combination, i) => {
    setTimeout(() => {
      generateSlip(combination)
      console.log('Starting Combination', i + 1)
    }, 5000 * i)
  })
}

const combination08F6x1 = () => {
  const teams = [NED_QAT, ENG_USA, ARG_KSA, TUN_FRA, ESP_GER, MAR_BEL, SRB_BRA, POR_URU]
  const combinations = findCombination(teams, 6)

  combinations.forEach((combination, i) => {
    setTimeout(() => {
      generateSlip(combination)
      console.log('Starting Combination', i + 1)
    }, 5000 * i)
  })
}

const combination09F6x1 = () => {
  const teams = [NED_QAT, ENG_USA, ARG_KSA, FRA_TUN, ESP_GER, BEL_MAR, CMR_BRA, POR_URU]
  const combinations = findCombination(teams, 6)

  combinations.forEach((combination, i) => {
    setTimeout(() => {
      generateSlip(combination)
      console.log('Starting Combination', i + 1)
    }, 5000 * i)
  })
}

const combination10F6x1 = () => {
  const teams = [NED_QAT, ENG_USA, ARG_KSA, FRA_TUN, ESP_CRC, MAR_BEL, CMR_BRA, POR_URU]
  const combinations = findCombination(teams, 6)

  combinations.forEach((combination, i) => {
    setTimeout(() => {
      generateSlip(combination)
      console.log('Starting Combination', i + 1)
    }, 5000 * i)
  })
}

const combination11F6x1 = () => {
  const teams = [NED_QAT, ENG_USA, ARG_KSA, FRA_TUN, ESP_GER, BEL_MAR, CMR_BRA, POR_URU]
  const combinations = findCombination(teams, 6)

  combinations.forEach((combination, i) => {
    setTimeout(() => {
      generateSlip(combination)
      console.log('Starting Combination', i + 1)
    }, 5000 * i)
  })
}

const combination12F6x1 = () => {
  const teams = [NED_QAT, ENG_USA, ARG_KSA, FRA_TUN, ESP_GER, MAR_BEL, CMR_BRA, POR_URU]
  const combinations = findCombination(teams, 6)

  combinations.forEach((combination, i) => {
    setTimeout(() => {
      generateSlip(combination)
      console.log('Starting Combination', i + 1)
    }, 5000 * i)
  })
}

const combination13F6x1 = () => {
  const teams = [NED_QAT, ENG_USA, ARG_KSA, TUN_FRA, ESP_CRC, BEL_MAR, CMR_BRA, POR_URU]
  const combinations = findCombination(teams, 6)

  combinations.forEach((combination, i) => {
    setTimeout(() => {
      generateSlip(combination)
      console.log('Starting Combination', i + 1)
    }, 5000 * i)
  })
}

const combination14F6x1 = () => {
  const teams = [NED_QAT, ENG_USA, ARG_KSA, TUN_FRA, ESP_CRC, MAR_BEL, CMR_BRA, POR_URU]
  const combinations = findCombination(teams, 6)

  combinations.forEach((combination, i) => {
    setTimeout(() => {
      generateSlip(combination)
      console.log('Starting Combination', i + 1)
    }, 5000 * i)
  })
}

const combination15F6x1 = () => {
  const teams = [NED_QAT, ENG_USA, ARG_KSA, TUN_FRA, ESP_GER, BEL_MAR, CMR_BRA, POR_URU]
  const combinations = findCombination(teams, 6)

  combinations.forEach((combination, i) => {
    setTimeout(() => {
      generateSlip(combination)
      console.log('Starting Combination', i + 1)
    }, 5000 * i)
  })
}

const combination16F6x1 = () => {
  const teams = [NED_QAT, ENG_USA, ARG_KSA, TUN_FRA, ESP_GER, MAR_BEL, CMR_BRA, POR_URU]
  const combinations = findCombination(teams, 6)

  combinations.forEach((combination, i) => {
    setTimeout(() => {
      generateSlip(combination)
      console.log('Starting Combination', i + 1)
    }, 5000 * i)
  })
}

const combination17F6x1 = () => {
  const teams = [QAT_NED, ENG_USA, ARG_KSA, TUN_FRA, ESP_GER, BEL_MAR, SRB_BRA, POR_URU]
  const combinations = findCombination(teams, 6)

  combinations.forEach((combination, i) => {
    setTimeout(() => {
      generateSlip(combination)
      console.log('Starting Combination', i + 1)
    }, 5000 * i)
  })
}

const combination18F6x1 = () => {
  const teams = [QAT_NED, ENG_USA, ARG_KSA, TUN_DEN, ESP_GER, BEL_MAR, SRB_BRA, POR_URU]
  const combinations = findCombination(teams, 6)

  combinations.forEach((combination, i) => {
    setTimeout(() => {
      generateSlip(combination)
      console.log('Starting Combination', i + 1)
    }, 5000 * i)
  })
}

// 4x1
const combination01F4x1 = () => {
  const teams = [NED_QAT, ENG_USA, ARG_KSA, FRA_TUN, ESP_CRC, BEL_MAR, SRB_BRA, POR_URU]
  const combinations = findCombination(teams, 4)

  combinations.forEach((combination, i) => {
    setTimeout(() => {
      generateSlip(combination)
      console.log('Starting Combination', i + 1)
    }, 5000 * i)
  })
}
combination01F4x1()

const combination02F4x1 = () => {
  const teams = [NED_QAT, ENG_USA, ARG_KSA, FRA_TUN, ESP_CRC, MAR_BEL, SRB_BRA, POR_URU]
  const combinations = findCombination(teams, 4)

  combinations.forEach((combination, i) => {
    setTimeout(() => {
      generateSlip(combination)
      console.log('Starting Combination', i + 1)
    }, 5000 * i)
  })
}
combination02F4x1()

const combination03F4x1 = () => {
  const teams = [NED_QAT, ENG_USA, ARG_KSA, FRA_TUN, ESP_GER, BEL_MAR, SRB_BRA, POR_URU]
  const combinations = findCombination(teams, 4)

  combinations.forEach((combination, i) => {
    setTimeout(() => {
      generateSlip(combination)
      console.log('Starting Combination', i + 1)
    }, 5000 * i)
  })
}
combination03F4x1()

const combination04F4x1 = () => {
  const teams = [NED_QAT, ENG_USA, ARG_KSA, FRA_TUN, ESP_GER, MAR_BEL, SRB_BRA, POR_URU]
  const combinations = findCombination(teams, 4)

  combinations.forEach((combination, i) => {
    setTimeout(() => {
      generateSlip(combination)
      console.log('Starting Combination', i + 1)
    }, 5000 * i)
  })
}
combination04F4x1()

const combination05F4x1 = () => {
  const teams = [NED_QAT, ENG_USA, ARG_KSA, TUN_FRA, ESP_CRC, BEL_MAR, SRB_BRA, POR_URU]
  const combinations = findCombination(teams, 4)

  combinations.forEach((combination, i) => {
    setTimeout(() => {
      generateSlip(combination)
      console.log('Starting Combination', i + 1)
    }, 5000 * i)
  })
}
combination05F4x1()

const combination06F4x1 = () => {
  const teams = [NED_QAT, ENG_USA, ARG_KSA, TUN_FRA, ESP_CRC, MAR_BEL, SRB_BRA, POR_URU]
  const combinations = findCombination(teams, 4)

  combinations.forEach((combination, i) => {
    setTimeout(() => {
      generateSlip(combination)
      console.log('Starting Combination', i + 1)
    }, 5000 * i)
  })
}
combination06F4x1()

// This
const combination07F4x1 = () => {
  const teams = [NED_QAT, ENG_USA, ARG_KSA, TUN_FRA, ESP_GER, BEL_MAR, SRB_BRA, POR_URU]
  const combinations = findCombination(teams, 4)

  combinations.forEach((combination, i) => {
    setTimeout(() => {
      generateSlip(combination)
      console.log('Starting Combination', i + 1)
    }, 5000 * i)
  })
}
combination07F4x1()

const combination08F4x1 = () => {
  const teams = [NED_QAT, ENG_USA, ARG_KSA, TUN_FRA, ESP_GER, MAR_BEL, SRB_BRA, POR_URU]
  const combinations = findCombination(teams, 4)

  combinations.forEach((combination, i) => {
    setTimeout(() => {
      generateSlip(combination)
      console.log('Starting Combination', i + 1)
    }, 5000 * i)
  })
}
combination08F4x1()

const combination09F4x1 = () => {
  const teams = [NED_QAT, ENG_USA, ARG_KSA, FRA_TUN, ESP_GER, BEL_MAR, CMR_BRA, POR_URU]
  const combinations = findCombination(teams, 4)

  combinations.forEach((combination, i) => {
    setTimeout(() => {
      generateSlip(combination)
      console.log('Starting Combination', i + 1)
    }, 5000 * i)
  })
}
combination09F4x1()

const combination10F4x1 = () => {
  const teams = [NED_QAT, ENG_USA, ARG_KSA, FRA_TUN, ESP_CRC, MAR_BEL, CMR_BRA, POR_URU]
  const combinations = findCombination(teams, 4)

  combinations.forEach((combination, i) => {
    setTimeout(() => {
      generateSlip(combination)
      console.log('Starting Combination', i + 1)
    }, 5000 * i)
  })
}
combination10F4x1()

const combination11F4x1 = () => {
  const teams = [NED_QAT, ENG_USA, ARG_KSA, FRA_TUN, ESP_GER, BEL_MAR, CMR_BRA, POR_URU]
  const combinations = findCombination(teams, 4)

  combinations.forEach((combination, i) => {
    setTimeout(() => {
      generateSlip(combination)
      console.log('Starting Combination', i + 1)
    }, 5000 * i)
  })
}
combination11F4x1()

const combination12F4x1 = () => {
  const teams = [NED_QAT, ENG_USA, ARG_KSA, FRA_TUN, ESP_GER, MAR_BEL, CMR_BRA, POR_URU]
  const combinations = findCombination(teams, 4)

  combinations.forEach((combination, i) => {
    setTimeout(() => {
      generateSlip(combination)
      console.log('Starting Combination', i + 1)
    }, 5000 * i)
  })
}
combination12F4x1()

const combination13F4x1 = () => {
  const teams = [NED_QAT, ENG_USA, ARG_KSA, TUN_FRA, ESP_CRC, BEL_MAR, CMR_BRA, POR_URU]
  const combinations = findCombination(teams, 4)

  combinations.forEach((combination, i) => {
    setTimeout(() => {
      generateSlip(combination)
      console.log('Starting Combination', i + 1)
    }, 5000 * i)
  })
}
combination13F4x1()

const combination14F4x1 = () => {
  const teams = [NED_QAT, ENG_USA, ARG_KSA, TUN_FRA, ESP_CRC, MAR_BEL, CMR_BRA, POR_URU]
  const combinations = findCombination(teams, 4)

  combinations.forEach((combination, i) => {
    setTimeout(() => {
      generateSlip(combination)
      console.log('Starting Combination', i + 1)
    }, 5000 * i)
  })
}
combination14F4x1()

const combination15F4x1 = () => {
  const teams = [NED_QAT, ENG_USA, ARG_KSA, TUN_FRA, ESP_GER, BEL_MAR, CMR_BRA, POR_URU]
  const combinations = findCombination(teams, 4)

  combinations.forEach((combination, i) => {
    setTimeout(() => {
      generateSlip(combination)
      console.log('Starting Combination', i + 1)
    }, 5000 * i)
  })
}
combination15F4x1()

const combination16F4x1 = () => {
  const teams = [NED_QAT, ENG_USA, ARG_KSA, TUN_FRA, ESP_GER, MAR_BEL, CMR_BRA, POR_URU]
  const combinations = findCombination(teams, 4)

  combinations.forEach((combination, i) => {
    setTimeout(() => {
      generateSlip(combination)
      console.log('Starting Combination', i + 1)
    }, 5000 * i)
  })
}
combination16F4x1()
