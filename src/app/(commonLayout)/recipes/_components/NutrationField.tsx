import React from 'react';
import { Plus, Trash2, ChevronDown } from 'lucide-react';

export default function NutritionField({nutritions, setNutritions}:{nutritions:any, setNutritions:any}) {
   
    const units = ['Unit', 'kg', 'g', 'mg', 'µg', 'ml', 'L', 'kcal'];

    
    const addNutrition = (e: React.MouseEvent) => {
        e.preventDefault(); // form submit bondho korbe
        setNutritions([
            ...nutritions,
            { id: Date.now(), name: '', value: '', unit: '' }
        ]);
    };

    const removeNutrition = (e: React.MouseEvent, id: any) => {
        e.preventDefault(); // form submit bondho korbe
        if (nutritions.length > 1) {
            setNutritions(nutritions.filter((n:any) => n.id !== id));
        }
    };

    const updateNutrition = (id: any, field: any, value: any) => {
        setNutritions(nutritions.map((n:any) =>
            n.id === id ? { ...n, [field]: value } : n
        ));
    };

    return (
        <div>
            {nutritions.map((nutrition:any) => (
                <div key={nutrition.id} className="mb-6">
                    <div className="flex items-center gap-4">
                        {/* Nutrition Name Input */}
                        <input
                            type="text"
                            placeholder="Nutrition Name"
                            value={nutrition.name}
                            onChange={(e) => updateNutrition(nutrition.id, 'name', e.target.value)}
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-400"
                        />

                        {/* Amount Input */}
                        <input
                            type="text"
                            placeholder="Amount"
                            value={nutrition.value}
                            onChange={(e) => updateNutrition(nutrition.id, 'value', e.target.value)}
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-400"
                        />

                        {/* Unit Dropdown */}
                        <div className="relative">
                            <select
                                value={nutrition.unit}
                                onChange={(e) => updateNutrition(nutrition.id, 'unit', e.target.value)}
                                className="appearance-none w-32 px-4 py-3 bg-gray-900 text-white rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-700 cursor-pointer pr-10"
                            >
                                {units.map(unit => (
                                    <option key={unit} value={unit}>{unit}</option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white pointer-events-none" />
                        </div>

                        {/* kg Label */}
                        <span className="text-gray-500 text-base w-8">{nutrition?.unit}</span>

                        {/* Delete Button - type="button" add korlam */}
                        <button
                            type="button"
                            onClick={(e) => removeNutrition(e, nutrition.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                            <Trash2 className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            ))}

            {/* Add Nutrition Button - type="button" add korlam */}
            <button
                type="button"
                onClick={addNutrition}
                className="flex items-center justify-center gap-2 px-6 py-2.5 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors mt-4 w-44"
            >
                <Plus className="w-4 h-4" />
                Add Nutrition
            </button>
        </div>
    );
}