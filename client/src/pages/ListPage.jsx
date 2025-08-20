import React from "react";
import { useState } from "react";

const initialStudents = [
  {
    id: 1,
    name: "John Smith",
    address: "123 Main St, New York, NY 10001",
    email: "john.smith@email.com",
    phone: "+1 (555) 123-4567",
    classes: ["Math", "Science", "History"],
    enrollmentDate: "2024-01-15"
  },
  {
    id: 2,
    name: "Jane Doe",
    address: "456 Park Ave, Los Angeles, CA 90001",
    email: "jane.doe@email.com",
    phone: "+1 (555) 234-5678",
    classes: ["English", "Art", "Music"],
    enrollmentDate: "2024-01-20"
  },
  {
    id: 3,
    name: "Bob Wilson",
    address: "789 Oak Rd, Chicago, IL 60601",
    email: "bob.wilson@email.com",
    phone: "+1 (555) 345-6789",
    classes: ["Physics", "Chemistry", "Biology"],
    enrollmentDate: "2024-02-01"
  },
  {
    id: 4,
    name: "Mary Johnson",
    address: "321 Pine St, Houston, TX 77001",
    email: "mary.johnson@email.com",
    phone: "+1 (555) 456-7890",
    classes: ["Geography", "Literature", "Spanish"],
    enrollmentDate: "2024-02-10"
  },
  {
    id: 5,
    name: "James Brown",
    address: "654 Maple Dr, Seattle, WA 98101",
    email: "james.brown@email.com",
    phone: "+1 (555) 567-8901",
    classes: ["Computer Science", "Calculus", "Statistics"],
    enrollmentDate: "2024-02-15"
  },
];

const ListPage = () => {
  const [students, setStudents] = useState(initialStudents);
  const [filteredStudents, setFilteredStudents] = useState(initialStudents);
  const [searchInput, setSearchInput] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [newStudent, setNewStudent] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    classes: "",
    enrollmentDate: ""
  });

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    
    if (value.trim() === "") {
      setFilteredStudents(students);
    } else {
      const result = students.filter((student) =>
        student.name.toLowerCase().includes(value.toLowerCase()) ||
        student.email.toLowerCase().includes(value.toLowerCase()) ||
        student.classes.some(cls => cls.toLowerCase().includes(value.toLowerCase()))
      );
      setFilteredStudents(result);
    }
  };

  const handleAddStudent = (e) => {
    e.preventDefault();
    if (newStudent.name.trim() && newStudent.email.trim()) {
      const student = {
        id: Date.now(),
        name: newStudent.name,
        address: newStudent.address,
        email: newStudent.email,
        phone: newStudent.phone,
        classes: newStudent.classes.split(',').map(cls => cls.trim()).filter(cls => cls),
        enrollmentDate: newStudent.enrollmentDate || new Date().toISOString().split('T')[0]
      };
      
      const updatedStudents = [...students, student];
      setStudents(updatedStudents);
      setFilteredStudents(updatedStudents);
      setNewStudent({
        name: "",
        address: "",
        email: "",
        phone: "",
        classes: "",
        enrollmentDate: ""
      });
      setShowAddForm(false);
    }
  };

  const handleDeleteStudent = (id) => {
    const updatedStudents = students.filter(student => student.id !== id);
    setStudents(updatedStudents);
    setFilteredStudents(updatedStudents);
  };

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Student Management System</h1>
        <p className="text-gray-600">Manage and track student information</p>
      </div>

      {/* Search and Add Controls */}
      <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex-1 max-w-md">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
              Search Students
            </label>
            <input
              id="search"
              type="text"
              placeholder="Search by name, email, or class..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={searchInput}
              onChange={handleSearch}
            />
          </div>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            {showAddForm ? 'Cancel' : 'Add New Student'}
          </button>
        </div>
      </div>

      {/* Add Student Form */}
      {showAddForm && (
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Add New Student</h2>
          <form onSubmit={handleAddStudent} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
              <input
                type="text"
                required
                value={newStudent.name}
                onChange={(e) => setNewStudent({...newStudent, name: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
              <input
                type="email"
                required
                value={newStudent.email}
                onChange={(e) => setNewStudent({...newStudent, email: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input
                type="tel"
                value={newStudent.phone}
                onChange={(e) => setNewStudent({...newStudent, phone: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Enrollment Date</label>
              <input
                type="date"
                value={newStudent.enrollmentDate}
                onChange={(e) => setNewStudent({...newStudent, enrollmentDate: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <input
                type="text"
                value={newStudent.address}
                onChange={(e) => setNewStudent({...newStudent, address: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Classes (comma separated)</label>
              <input
                type="text"
                placeholder="e.g. Math, Science, History"
                value={newStudent.classes}
                onChange={(e) => setNewStudent({...newStudent, classes: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-medium transition-colors"
              >
                Add Student
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Student List */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">
            Students ({filteredStudents.length})
          </h2>
        </div>
        
        {filteredStudents.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            {searchInput ? 'No students found matching your search.' : 'No students found.'}
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {filteredStudents.map((student) => (
              <div key={student.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">{student.name}</h3>
                      <span className="text-sm text-gray-500">ID: {student.id}</span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                      <div>
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">Email:</span> {student.email}
                        </p>
                        {student.phone && (
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Phone:</span> {student.phone}
                          </p>
                        )}
                      </div>
                      <div>
                        {student.address && (
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Address:</span> {student.address}
                          </p>
                        )}
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">Enrolled:</span> {student.enrollmentDate}
                        </p>
                      </div>
                    </div>
                    
                    {student.classes && student.classes.length > 0 && (
                      <div>
                        <p className="text-sm font-medium text-gray-700 mb-1">Classes:</p>
                        <div className="flex flex-wrap gap-1">
                          {student.classes.map((className, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                            >
                              {className}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <button
                    onClick={() => handleDeleteStudent(student.id)}
                    className="ml-4 text-red-600 hover:text-red-800 text-sm font-medium transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ListPage;
