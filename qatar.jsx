// ! COPY THIS IN A FRESH HKJC CONSOLE START
// ? Check Selection | Remember to check team combination before placing bets
const checkSelection = (teams) => {
  teams.map((team) => $(team).trigger('click'))
}

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
const generateSlip = (inputIds, valueAmount = '10') => {
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

  $('#inputAllUp').val(valueAmount)

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
  }, 4000)
}

// GROUP A
const NED = '#tourn_GPW_50003675_1_1_18994020_0_2_c'
const NED_QAT = '#tourn_GPF_50003675_1_0104_79327019_0_5_c'
const QAT_NED = '#tourn_GPF_50003675_1_0401_79327019_0_8_c'

// GROUP B
const ENG = '#tourn_GPW_50003675_2_1_18995020_0_1_c'
const ENG_USA = '#tourn_GPF_50003675_2_0102_79325019_0_2_c'

// GROUP C
const ARG = '#tourn_GPW_50003675_3_1_18989020_0_1_c'
const ARG_KSA = '#tourn_GPF_50003675_3_0104_79322019_0_3_c'

// GROUP D
const TUN = '#tourn_GPW_50003675_4_3_18992020_0_4_c'
const FRA = '#tourn_GPW_50003675_4_1_18992020_0_3_c'
const FRA_TUN = '#tourn_GPF_50003675_4_0103_79320019_0_9_c'
const TUN_FRA = '#tourn_GPF_50003675_4_0301_79320019_0_12_c'

// GROUP E
const ESP = '#tourn_GPW_50003675_5_1_18988020_0_4_c'
const ESP_CRC = '#tourn_GPF_50003675_5_0104_79321019_0_10_c'
const ESP_GER = '#tourn_GPF_50003675_5_0102_79321019_0_11_c'

// GROUP F
const BEL = '#tourn_GPW_50003675_6_1_18993020_0_1_c'
const MAR_BEL = '#tourn_GPF_50003675_6_0301_79326019_0_10_c'
const BEL_MAR = '#tourn_GPF_50003675_6_0103_79326019_0_3_c'

// GROUP G
const SRB = '#tourn_GPW_50003675_7_3_18990020_0_3_c'
const SRB_BRA = '#tourn_GPF_50003675_7_0301_79324019_0_7_c'
const CMR_BRA = '#tourn_GPF_50003675_7_0401_79324019_0_4_c'

// GROUP H
const POR = '#tourn_GPW_50003675_8_1_18991020_0_3_c'
const POR_URU = '#tourn_GPF_50003675_8_0102_79323019_0_9_c'
// ! COPY THIS IN A FRESH HKJC CONSOLE END

// 8x1
const combinationF8x1 = () => {
  const combinations = [
    [NED, ENG, ARG, TUN, ESP, BEL, SRB, POR],
    [NED, ENG, ARG, FRA, ESP, BEL, SRB, POR]
  ]
  combinations.forEach((combination, i) => {
    setTimeout(() => {
      generateSlip(combination)
      console.log('Starting Combination', i + 1)
    }, 5000 * i)
  })
}

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

// Done 5 times | Total 28 x $50 = $1400
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
  const teams = [NED_QAT, ENG_USA, ARG_KSA, FRA_TUN, ESP_CRC, BEL_MAR, CMR_BRA, POR_URU]
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
  const teams = [QAT_NED, ENG_USA, ARG_KSA, FRA_TUN, ESP_GER, MAR_BEL, SRB_BRA, POR_URU]
  const combinations = findCombination(teams, 6)

  combinations.forEach((combination, i) => {
    setTimeout(() => {
      generateSlip(combination)
      console.log('Starting Combination', i + 1)
    }, 5000 * i)
  })
}

const combination19F6x1 = () => {
  const teams = [QAT_NED, ENG_USA, ARG_KSA, TUN_FRA, ESP_GER, BEL_MAR, CMR_BRA, POR_URU]
  const combinations = findCombination(teams, 6)

  combinations.forEach((combination, i) => {
    setTimeout(() => {
      generateSlip(combination)
      console.log('Starting Combination', i + 1)
    }, 5000 * i)
  })
}

const combination20F6x1 = () => {
  const teams = [QAT_NED, ENG_USA, ARG_KSA, FRA_TUN, ESP_GER, MAR_BEL, CMR_BRA, POR_URU]
  const combinations = findCombination(teams, 6)

  combinations.forEach((combination, i) => {
    setTimeout(() => {
      generateSlip(combination)
      console.log('Starting Combination', i + 1)
    }, 5000 * i)
  })
}

const combination21F6x1 = () => {
  const teams = [QAT_NED, ENG_USA, ARG_KSA, TUN_FRA, ESP_CRC, BEL_MAR, SRB_BRA, POR_URU]
  const combinations = findCombination(teams, 6)

  combinations.forEach((combination, i) => {
    setTimeout(() => {
      generateSlip(combination)
      console.log('Starting Combination', i + 1)
    }, 5000 * i)
  })
}

const combination22F6x1 = () => {
  const teams = [QAT_NED, ENG_USA, ARG_KSA, FRA_TUN, ESP_CRC, MAR_BEL, SRB_BRA, POR_URU]
  const combinations = findCombination(teams, 6)

  combinations.forEach((combination, i) => {
    setTimeout(() => {
      generateSlip(combination)
      console.log('Starting Combination', i + 1)
    }, 5000 * i)
  })
}

const combination23F6x1 = () => {
  const teams = [QAT_NED, ENG_USA, ARG_KSA, TUN_FRA, ESP_CRC, BEL_MAR, CMR_BRA, POR_URU]
  const combinations = findCombination(teams, 6)

  combinations.forEach((combination, i) => {
    setTimeout(() => {
      generateSlip(combination)
      console.log('Starting Combination', i + 1)
    }, 5000 * i)
  })
}

const combination24F6x1 = () => {
  const teams = [QAT_NED, ENG_USA, ARG_KSA, FRA_TUN, ESP_CRC, MAR_BEL, CMR_BRA, POR_URU]
  const combinations = findCombination(teams, 6)

  combinations.forEach((combination, i) => {
    setTimeout(() => {
      generateSlip(combination)
      console.log('Starting Combination', i + 1)
    }, 5000 * i)
  })
}
