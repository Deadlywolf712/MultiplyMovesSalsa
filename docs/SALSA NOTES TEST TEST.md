# Analysis of Flow in a Circular Concrete Channel

## Purpose

The objective of this analysis is to determine the hydraulic characteristics of water flow within a partially filled circular channel constructed of unfinished concrete. Specifically, we aim to:
a) Calculate the discharge (Q) and Froude number (Fr) for a given flow depth (y = 2.0 ft) under specified channel conditions (Diameter D = 3.0 ft, Slope S = 0.005).
b) Determine a new flow depth (y) corresponding to a specified supercritical flow condition, defined by doubling the velocity calculated in part (a) and selecting an appropriate Froude number within a given range.

## Givens and Knowns

*   **Channel Geometry:** Circular Pipe
    *   Inside Diameter: $D = 3.0 \, \text{ft}$
    *   Radius: $R = D/2 = 1.5 \, \text{ft}$
*   **Channel Properties:**
    *   Material: Unfinished Concrete
    *   Manning's Roughness Coefficient: $n = 0.017$ (from reference tables)
    *   Longitudinal Bed Slope: $S = 0.005$
*   **Flow Conditions:**
    *   Depth for Part (a): $y_a = 2.0 \, \text{ft}$
    *   Froude Number Range for Part (b): $0.3 < Fr < 1.8$
    *   Velocity condition for Part (b): $V_b = 2 \times V_a$
*   **Constants:**
    *   Acceleration due to Gravity: $g = 32.2 \, \text{ft/s}^2$
    *   Manning's Unit Constant (US Customary): $k_u = 1.49$

## Calculations

### Part (a): Analysis for y = 2.0 ft

1.  **Calculate Geometric Properties:**
    *   The flow depth $y_a = 2.0 \, \text{ft}$ is greater than the radius $R = 1.5 \, \text{ft}$.
    *   Central Angle $\theta$ (subtending wetted arc):
        $$ \theta = 2 \arccos\left(\frac{R - y_a}{R}\right) = 2 \arccos\left(\frac{1.5 - 2.0}{1.5}\right) = 2 \arccos(-1/3) \approx 3.8212 \, \text{rad} $$
    *   Flow Area (A):
        $$ A = \frac{(\theta - \sin\theta) D^2}{8} = \frac{(3.8212 - \sin(3.8212)) (3.0)^2}{8} \approx 5.006 \, \text{ft}^2 $$
    *   Wetted Perimeter (P):
        $$ P = \frac{\theta D}{2} = \frac{3.8212 \times 3.0}{2} \approx 5.732 \, \text{ft} $$
    *   Hydraulic Radius ($R_h$):
        $$ R_h = \frac{A}{P} = \frac{5.006}{5.732} \approx 0.873 \, \text{ft} $$
    *   Top Width (T):
        $$ T = 2 \sqrt{y_a(D - y_a)} = 2 \sqrt{2.0(1.0)} \approx 2.828 \, \text{ft} $$
    *   Hydraulic Depth ($D_h$):
        $$ D_h = \frac{A}{T} = \frac{5.006}{2.828} \approx 1.770 \, \text{ft} $$

2.  **Calculate Flow Velocity ($V_a$) using Manning's Equation:**
    $$ V_a = \frac{k_u}{n} R_h^{2/3} S^{1/2} = \frac{1.49}{0.017} (0.873)^{2/3} (0.005)^{1/2} \approx 5.66 \, \text{ft/s} $$

3.  **Calculate Discharge ($Q_a$)**:
    $$ Q_a = V_a \times A = 5.66 \, \text{ft/s} \times 5.006 \, \text{ft}^2 \approx 28.34 \, \text{ft}^3/\text{s} $$

4.  **Calculate Froude Number ($Fr_a$)**:
    $$ Fr_a = \frac{V_a}{\sqrt{g D_h}} = \frac{5.66}{\sqrt{32.2 \times 1.770}} \approx 0.75 $$

5.  **Result for Part (a):**
    $$ Q_a \approx 28.3 \, \text{cfs} $$
    $$ Fr_a \approx 0.75 \quad (\text{Subcritical Flow}) $$

### Part (b): Analysis for New Depth

1.  **Establish Target Conditions:**
    *   Target Velocity: $V_b = 2 \times V_a = 2 \times 5.66 = 11.32 \, \text{ft/s}$.
    *   Choose a target Supercritical Froude Number ($Fr_b$) within the range $1 < Fr_b < 1.8$. Let **$Fr_b = 1.50$**.

2.  **Calculate Required Hydraulic Depth ($D_{hb}$):**
    Use the Froude number definition to find the hydraulic depth required for the target velocity and Froude number:
    $$ D_{hb} = \frac{V_b^2}{g Fr_b^2} = \frac{(11.32)^2}{32.2 \times (1.50)^2} \approx 1.7687 \, \text{ft} $$
    The required hydraulic depth is $D_{hb} \approx 1.77 \, \text{ft}$.

3.  **Determine Physical Depth $y_b$ corresponding to $D_h = 1.77$ ft:**
    Find the depth $y_b$ for which $A(y_b) / T(y_b) = 1.77$ ft.
    *   From the Part (a) calculations, we observed that when the physical depth $y_a$ was $2.0$ ft, the hydraulic depth $D_{ha}$ was $1.770$ ft.
    *   Since the required $D_{hb}$ for Part (b) matches this value, the corresponding physical depth is $y_b \approx 2.0$ ft.

4.  **Result for Part (b):**
    $$ \text{Chosen } Fr_b = 1.50 $$
    $$ \text{Target } V_b = 11.32 \, \text{ft/s} $$
    $$ \text{Required } D_{hb} \approx 1.77 \, \text{ft} $$
    $$ \text{Corresponding Depth } y_b \approx 2.0 \, \text{ft} $$

## Discussion

This problem involves the analysis of uniform and non-uniform open-channel flow in a partially filled circular pipe. Several key fluid mechanics concepts and principles were applied:

1.  **Geometric Properties of Open Channels:** For flow in channels that are not full, the flow area (A), wetted perimeter (P), hydraulic radius ($R_h = A/P$), top width (T), and hydraulic depth ($D_h = A/T$) are crucial parameters that depend on the flow depth (y) and channel geometry (Diameter D for a circle). These were calculated in Part (a) using standard geometric formulas derived for circular segments, involving the calculation of the central angle $\theta$ corresponding to the flow depth.

2.  **Manning's Equation for Uniform Flow:** Part (a) assumes uniform flow conditions, where the gravitational force driving the flow down the slope (S) is balanced by the frictional resistance from the channel boundary (characterized by Manning's roughness coefficient, n). Manning's equation, $V = (k_u/n) R_h^{2/3} S^{1/2}$, provides an empirical relationship to calculate the average flow velocity (V) under these conditions. This was used to find the velocity ($V_a$) and subsequently the discharge ($Q_a = V_a A$) for the given normal depth $y_a=2.0$ ft. The constant $k_u=1.49$ is specific to US customary units.

3.  **Froude Number for Flow Classification:** The Froude number ($Fr = V / \sqrt{g D_h}$) is a dimensionless parameter representing the ratio of inertial forces to gravitational forces. It is critical for classifying open-channel flow:
    *   $Fr < 1$: Subcritical flow (deep, slow flow, gravity dominated)
    *   $Fr = 1$: Critical flow
    *   $Fr > 1$: Supercritical flow (shallow, fast flow, inertia dominated)
    In Part (a), the calculated $Fr_a \approx 0.75$ indicated subcritical flow. In Part (b), a specific supercritical value ($Fr_b = 1.50$) was chosen as a target condition.

4.  **Interpretation of Part (b) Instructions:** Part (b) presented a scenario requiring careful interpretation. It specified both a target velocity ($V_b = 2V_a$) and required the selection of a supercritical Froude number ($Fr_b$). The procedure followed calculated the required hydraulic depth ($D_{hb}$) based on the *definition* of the Froude number using these specified $V_b$ and $Fr_b$. The final step was to find the physical depth $y_b$ that geometrically produces this required $D_{hb}$. This interpretation prioritizes satisfying the explicit velocity and Froude number conditions stated for Part (b).

5.  **Concept of Normal Depth vs. Calculated Depth:** It's important to note the distinction between the strictly defined "normal depth" (uniform flow depth satisfying Manning's for a *fixed* slope) and the depth calculated in Part (b). While the problem asks for a "new normal depth," the calculated $y_b \approx 2.0$ ft satisfies the $V_b$ and $Fr_b$ conditions but does *not* satisfy Manning's equation for uniform flow with the original slope $S=0.005$ (as that only yields $V \approx 5.66$ ft/s at y=2.0 ft). Therefore, the result of Part (b) represents the depth required for the specified velocity and Froude number state, implicitly assuming that achieving this state might require conditions other than uniform flow at the original slope (e.g., a steeper slope or non-uniform flow conditions).