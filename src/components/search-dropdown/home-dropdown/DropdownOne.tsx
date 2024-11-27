import React, { useState } from "react";

interface DropdownOneProps {
    style?: React.CSSProperties;
}

const defaultStyles: React.CSSProperties = {
    width: "90%",
    maxWidth: "600px",
    margin: "30px auto",
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
};

const DropdownOne: React.FC<DropdownOneProps> = ({ style }) => {
    const [currentSection, setCurrentSection] = useState(0);
    const sections = ["Basic Information", "Food Preferences", "Meal Plan Specifics", "Finalize and Submit"];

    const [formData, setFormData] = useState<any>({
        name: "",
        email: "",
        foods_to_avoid: "",
        cuisine_preferences: [],
        time_to_cook: "",
        budget: "",
        cooking_skills: "",
        meal_plan_goal: "",
        grocery_list: "",
        recipes: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        // @ts-ignore
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setFormData((prev: any) => ({
                ...prev,
                cuisine_preferences: checked
                    ? [...prev.cuisine_preferences, value]
                    : prev.cuisine_preferences.filter((v: string) => v !== value),
            }));
        } else {
            setFormData((prev: any) => ({ ...prev, [name]: value }));
        }
    };

    const nextSection = () => {
        if (currentSection < sections.length - 1) setCurrentSection(currentSection + 1);
    };

    const prevSection = () => {
        if (currentSection > 0) setCurrentSection(currentSection - 1);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch("https://creditutilitool-7d05aa17842c.herokuapp.com/create-meal-plan", {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!response.ok) throw new Error("Failed to create meal plan");
            alert("Meal plan created successfully!");
        } catch (error: any) {
            alert(`Error: ${error.message}`);
        }
    };

    return (
        <div style={{ ...defaultStyles, ...style }}>
            <form onSubmit={handleSubmit}>
                {currentSection === 0 && (
                    <div style={styles.section}>
                        <h2 style={styles.header}>Basic Information</h2>
                        <label style={styles.label}>
                            Name
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                style={styles.input}
                            />
                        </label>
                        <label style={styles.label}>
                            Email
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                style={styles.input}
                            />
                        </label>
                    </div>
                )}
                {currentSection === 1 && (
                    <div style={styles.section}>
                        <h2 style={styles.header}>Food Preferences</h2>
                        <label style={styles.label}>
                            Foods to Avoid
                            <textarea
                                name="foods_to_avoid"
                                value={formData.foods_to_avoid}
                                onChange={handleInputChange}
                                required
                                style={styles.textarea}
                            />
                        </label>
                        <label style={styles.label}>
                            Cuisine Preferences
                            <div style={styles.checkboxGroup}>
                                {["American", "Chinese", "Mexican", "Italian", "Indian", "Japanese", "Thai", "French"].map((cuisine) => (
                                    <label key={cuisine} style={styles.checkboxLabel}>
                                        <input
                                            type="checkbox"
                                            name="cuisine_preferences[]"
                                            value={cuisine}
                                            onChange={handleInputChange}
                                            checked={formData.cuisine_preferences.includes(cuisine)}
                                            style={styles.checkbox}
                                        />
                                        {cuisine}
                                    </label>
                                ))}
                            </div>
                        </label>
                    </div>
                )}
                {currentSection === 2 && (
                    <div style={styles.section}>
                        <h2 style={styles.header}>Meal Plan Specifics</h2>
                        <label style={styles.label}>
                            Time Available to Cook
                            <select
                                name="time_to_cook"
                                value={formData.time_to_cook}
                                onChange={handleInputChange}
                                required
                                style={styles.select}
                            >
                                <option value="">Select</option>
                                <option value="15-minutes">Under 15 minutes</option>
                                <option value="30-minutes">30 minutes</option>
                                <option value="1-hour">1 hour</option>
                            </select>
                        </label>
                        <label style={styles.label}>
                            Budget
                            <select
                                name="budget"
                                value={formData.budget}
                                onChange={handleInputChange}
                                required
                                style={styles.select}
                            >
                                <option value="">Select</option>
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                        </label>
                        <label style={styles.label}>
                            Cooking Skills
                            <select
                                name="cooking_skills"
                                value={formData.cooking_skills}
                                onChange={handleInputChange}
                                required
                                style={styles.select}
                            >
                                <option value="">Select</option>
                                <option value="Beginner">Beginner</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Advanced">Advanced</option>
                            </select>
                        </label>
                        <label style={styles.label}>
                            Meal Plan Goal
                            <select
                                name="meal_plan_goal"
                                value={formData.meal_plan_goal}
                                onChange={handleInputChange}
                                required
                                style={styles.select}
                            >
                                <option value="">Select</option>
                                <option value="lose_weight">Lose Weight</option>
                                <option value="gain_weight">Gain Weight</option>
                                <option value="maintain_weight">Maintain Weight</option>
                                <option value="gain_muscle">Gain Muscle</option>
                                <option value="better_digestion">Better Digestion</option>
                                <option value="increased_energy">Increased Energy</option>
                            </select>
                        </label>
                    </div>
                )}
                {currentSection === 3 && (
                    <div style={styles.section}>
                        <h2 style={styles.header}>Finalize and Submit</h2>
                        <label style={styles.label}>
                            Add a Grocery List?
                            <select
                                name="grocery_list"
                                value={formData.grocery_list}
                                onChange={handleInputChange}
                                required
                                style={styles.select}
                            >
                                <option value="">Select</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </label>
                        <label style={styles.label}>
                            Add Recipes?
                            <select
                                name="recipes"
                                value={formData.recipes}
                                onChange={handleInputChange}
                                required
                                style={styles.select}
                            >
                                <option value="">Select</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </label>
                    </div>
                )}
                <div style={styles.navigation}>
                    {currentSection > 0 && (
                        <button type="button" onClick={prevSection} style={styles.button}>
                            Previous
                        </button>
                    )}
                    {currentSection < sections.length - 1 ? (
                        <button type="button" onClick={nextSection} style={styles.button}>
                            Next
                        </button>
                    ) : (
                        <button type="submit" style={styles.button}>
                            Submit
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    section: {
        marginBottom: "20px",
    },
    header: {
        fontSize: "24px",
        marginBottom: "10px",
    },
    label: {
        display: "block",
        marginBottom: "10px",
        fontWeight: "bold",
    },
    input: {
        width: "100%",
        padding: "10px",
        marginBottom: "10px",
    },
    textarea: {
        width: "100%",
        padding: "10px",
        marginBottom: "10px",
    },
    select: {
        width: "100%",
        padding: "10px",
        marginBottom: "10px",
    },
    checkboxGroup: {
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
    },
    checkboxLabel: {
        display: "flex",
        alignItems: "center",
    },
    checkbox: {
        marginRight: "5px",
    },
    navigation: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "20px",
    },
    button: {
        padding: "10px 20px",
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
    },
};

export default DropdownOne;

