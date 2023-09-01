import React, { useState } from 'react';

function HarrisBenedictCalculator() {
    // creating state variables for user inputs
    const [gender, setGender] = useState('male');
    const [weight, setWeight] = useState('');
    const [weightUnit, setWeightUnit] = useState('kg');
    const [heightFeet, setHeightFeet] = useState('');
    const [heightInches, setHeightInches] = useState('');
    const [heightUnit, setHeightUnit] = useState('m');
    const [age, setAge] = useState('');
    const [activityLevel, setActivityLevel] = useState('sedentary');
    const [caloricMaintenance, setCaloricMaintenance] = useState('');

    // define calculation logic based on the H-B formula

    const calculateCaloricMaintenance = () => {
        // validate input values
        if (!age || !weight || !heightFeet || !heightInches) {
            alert('Please fill in all required fields.'); // display an alert if any required field is empty
            return;
        }

        // additional validation based on specific criteria
        let errorMessage = null;

        switch (true) {
            case age < 1:
                errorMessage = 'Age must be at least 1.';
                break;
            case weight < 1 && weightUnit === 'kg':
                errorMessage = 'Weight must be at least 1 kg.';
                break;
            case weight < 1 && weightUnit === 'lb':
                errorMessage = 'Weight must be at least 1 lb.';
                break;
            case heightFeet < 1 && heightUnit === 'ft':
                errorMessage = 'Height must be at least 1 ft.';
                break;
            case heightFeet < 1 && heightUnit === 'm':
                errorMessage = 'Height must be at least 1 m';
                break;
            default:
                // no specific error, proceed with calculation
                break;
        }

        if (errorMessage) {
            alert(errorMessage); // display the specific error message
            return;
        }

        let bmr = 0;

        // define separate functions for male and female equations
        const calculateBMRForMale = () => {
            const weightInKg = weightUnit === 'kg' ? parseFloat(weight) : parseFloat(weight) * 0.453592;

            let heightInCm = 0;
            if (heightUnit === 'm') {
                // If height is in meters, convert centimeters to meters
                heightInCm = parseFloat(heightFeet) * 100 + parseFloat(heightInches);
            } else {
                // If height is in feet/inches, convert feet and inches to centimeters
                heightInCm = parseFloat(heightFeet) * 30.48 + parseFloat(heightInches) * 2.54;
            }

            return 66.5 + 13.75 * weightInKg + 5.003 * heightInCm - 6.755 * parseFloat(age);
        };

        const calculateBMRForFemale = () => {
            const weightInKg = weightUnit === 'kg' ? parseFloat(weight) : parseFloat(weight) * 0.453592;

            let heightInCm = 0;
            if (heightUnit === 'm') {
                // If height is in meters, convert centimeters to meters
                heightInCm = parseFloat(heightFeet) * 100 + parseFloat(heightInches);
            } else {
                // If height is in feet/inches, convert feet and inches to centimeters
                heightInCm = parseFloat(heightFeet) * 30.48 + parseFloat(heightInches) * 2.54;
            }

            return 655.1 + 9.563 * weightInKg + 1.85 * heightInCm - 4.676 * parseFloat(age);
        };


        // call appropriate function based on gender
        if (gender === 'male') {
            bmr = calculateBMRForMale();
        } else {
            bmr = calculateBMRForFemale();
        }

        // applying activity level multipliers to BMR to get caloric maintenance
        const activiyMultipliers = {
            sedentary: 1.2,
            lightlyActive: 1.375,
            moderatelyActive: 1.55,
            veryActive: 1.725,
            extraActive: 1.9,
        };

        const maintenance = bmr * activiyMultipliers[activityLevel];

        // update state variable for displaying the calculated result
        setCaloricMaintenance(maintenance.toFixed(2));
    };

    return (
        <div className="p-6 mx-auto container flex flex-col w-full space-y-6">
            <label className="block text-xl font-medium mb-1">
                Gender:
                <select
                    className="px-4 py-1 border border-black border-solid rounded-lg w-fit h-1/6 ml-1"
                    id="gender" 
                    value={gender} 
                    onChange={(e) => setGender(e.target.value)}
                >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </label>
            <label className="block text-xl font-medium mb-1">
                Weight:
                <input
                    className="w-[15%] mr-1 ml-1 px-2 py-1 border border-black border-solid rounded-lg h-1/6" 
                    type="number" 
                    value={weight} 
                    onChange={(e) => {
                        const newValue = e.target.value.replace(/[^0-9]/g, ''); // Remove any non-digit characters
                        if (newValue.length === 1) {
                            setWeight(newValue); // Keep single digits including zero
                        } else {
                            setWeight(newValue.replace(/^0+/, '')); // Remove leading zeros
                        }
                    }}
                    onKeyDown={(e) => {
                        if (e.key === '.' || e.key === 'e') {
                            e.preventDefault(); // Prevent entering period or exponential notation
                        }
                    }}
                    min="1"
                /> 
                <select
                    className="px-2 py-1 border border-black border-solid rounded-lg w-fit h-1/6"
                    id="weight" 
                    value={weightUnit} 
                    onChange={(e) => setWeightUnit(e.target.value)}
                >
                    <option value="kg">kg</option>
                    <option value="lb">lb</option>
                </select>
            </label>
            <label className="block text-xl font-medium mb-1">
                Height:
                {heightUnit === 'ft' ? (
                    <>
                        <input 
                            className="w-[15%] ml-1 px-2 py-1 border border-black border-solid rounded-lg h-1/6" 
                            type="number" 
                            value={heightFeet} 
                            onChange={(e) => {
                                const newValue = e.target.value.replace(/[^0-9]/g, ''); // Remove any non-digit characters
                                if (newValue.length === 1) {
                                    setHeightFeet(newValue); // Keep single digits including zero
                                } else {
                                    setHeightFeet(newValue.replace(/^0+/, '')); // Remove leading zeros
                                }
                            }}
                            onKeyDown={(e) => {
                                if (e.key === '.' || e.key === 'e') {
                                    e.preventDefault(); // Prevent entering period or exponential notation
                                }
                            }}
                            min="1" 
                        /> ft
                        <input 
                            className="w-[15%] ml-3 px-2 py-1 border border-black border-solid rounded-lg h-1/6" 
                            type="number" 
                            value={heightInches} 
                            onChange={(e) => {
                                const newValue = e.target.value.replace(/[^0-9]/g, ''); // Remove any non-digit characters
                                if (newValue.length === 1) {
                                    setHeightInches(newValue); // Keep single digits including zero
                                } else {
                                    setHeightInches(newValue.replace(/^0+/, '')); // Remove leading zeros
                                }
                            }}
                            onKeyDown={(e) => {
                                if (e.key === '.' || e.key === 'e') {
                                    e.preventDefault(); // Prevent entering period or exponential notation
                                }
                            }}
                            min="0" 
                        /> in
                    </>
                ) : (
                    <>
                        <input 
                            className="w-[15%] ml-1 px-2 py-1 border border-black border-solid rounded-lg h-1/6" 
                            type="number" 
                            value={heightFeet} 
                            onChange={(e) => {
                                const newValue = e.target.value.replace(/[^0-9]/g, ''); // Remove any non-digit characters
                                if (newValue.length === 1) {
                                    setHeightFeet(newValue); // Keep single digits including zero
                                } else {
                                    setHeightFeet(newValue.replace(/^0+/, '')); // Remove leading zeros
                                }
                            }}
                            onKeyDown={(e) => {
                                if (e.key === '.' || e.key === 'e') {
                                    e.preventDefault(); // Prevent entering period or exponential notation
                                }
                            }}
                            min="1" 
                        /> m
                        <input 
                            className="w-[15%] ml-3 px-2 py-1 border border-black border-solid rounded-lg h-1/6" 
                            type="number" 
                            value={heightInches} 
                            onChange={(e) => {
                                const newValue = e.target.value.replace(/[^0-9]/g, ''); // Remove any non-digit characters
                                if (newValue.length === 1) {
                                    setHeightInches(newValue); // Keep single digits including zero
                                } else {
                                    setHeightInches(newValue.replace(/^0+/, '')); // Remove leading zeros
                                }
                            }}
                            onKeyDown={(e) => {
                                if (e.key === '.' || e.key === 'e') {
                                    e.preventDefault(); // Prevent entering period or exponential notation
                                }
                            }}
                            min="0" 
                        /> cm
                    </>
                )}
                <select
                    className="w-fit mr-5 mt-2 lg:mt-0 lg:ml-1 px-2 py-1 border border-black border-solid rounded-lg h-1/6"
                    id="height" 
                    value={heightUnit} 
                    onChange={(e) => setHeightUnit(e.target.value)}
                >
                    <option value="m">meters/centimeters</option>
                    <option value="ft">feet/inches</option>
                </select>
            </label>
            <label className="block text-xl font-medium mb-1">
                Age:
                <input 
                    className="w-[15%] ml-1 px-2 py-1 border border-black border-solid rounded-lg h-1/6" 
                    type="number" 
                    value={age} 
                    onChange={(e) => {
                        const newValue = e.target.value.replace(/[^0-9]/g, ''); // Remove any non-digit characters
                        if (newValue.length === 1) {
                            setAge(newValue); // Keep single digits including zero
                        } else {
                            setAge(newValue.replace(/^0+/, '')); // Remove leading zeros
                        }
                    }}
                    onKeyDown={(e) => {
                        if (e.key === '.' || e.key === 'e') {
                            e.preventDefault(); // Prevent entering period or exponential notation
                        }
                    }}  
                    min="1"
                />
            </label>
            <label className="text-xl font-medium mb-1">
                Activity Level:
                <select
                    className="lg:ml-1 w-3/4 mt-1 lg:mt-0 px-2 py-1 border border-black border-solid rounded-lg h-1/6"
                    id="activityLevel" 
                    value={activityLevel} 
                    onChange={(e) => setActivityLevel(e.target.value)}
                >
                    <option value="sedentary">Sedentary (little to no exercise)</option>
                    <option value="lightlyActive">Lightly Active (light exercise/sports 1-3 days/week)</option>
                    <option value="moderatelyActive">Moderately Active (moderate exercise/sports 3-5 days/week)</option>
                    <option value="veryActive">Very Active (hard exercise sports 6-7 days a week)</option>
                    <option value="extraActive">Extra Active (very hard exercise/sports & a physical job)</option>
                </select>
            </label>
            <button
                className="flex justify-center mx-auto font-semibold p-3 px-6 pt-2 w-44 text-white bg-stone-700 rounded-lg baseline hover:bg-stone-600 hover:duration-500 hover:scale-105"
                onClick={calculateCaloricMaintenance}>Calculate</button>
            {caloricMaintenance && (
                <div>
                    <h2>Caloric Maintenance:</h2>
                    <p>{Math.round(caloricMaintenance)} calories</p>
                </div>
            )}
        </div>
    )
};

export default HarrisBenedictCalculator;