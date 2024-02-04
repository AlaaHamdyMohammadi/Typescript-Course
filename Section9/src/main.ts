// Utility Types

// 1- Partial: Making all properties in the interface is optional

interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssinment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = { studentId: "abc123", title: "Math", grade: 0 };
console.log(updateAssinment(assign1, { title: "A" }));
/*
  2- Required and Readonly:
  Required:  All properties are required (verify property is optional but now is required)
  Readonly:  All properties are readonly
*/
const recordAssignment = (assign: Required<Assignment>) => {
  // Send to database
  return assign;
};

const assignVerified: Readonly<Assignment> = {
  ...assign1,
  verified: true,
};

assignVerified.grade = 100; // Error => just readonly