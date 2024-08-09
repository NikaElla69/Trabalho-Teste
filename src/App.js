import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import ActivityForm from './components/ActivityForm';
import ActivityList from './components/ActivityList';
import ActivityDetails from './components/ActivityDetails';
import './styles.css';

function App() {
  const [user, setUser] = useState(null);
  const [activities, setActivities] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState(null);

  const handleLogin = (email) => {
    setUser(email);
  };

  const handleSaveActivity = (activity) => {
    setActivities([...activities, { ...activity, completed: false }]);
  };

  const handleSelectActivity = (activity) => {
    setSelectedActivity(activity);
  };

  const handleToggleActivity = (activity) => {
    setActivities(activities.map(act => act === activity ? { ...act, completed: !act.completed } : act));
  };

  const handleDeleteActivity = (activity) => {
    setActivities(activities.filter(act => act !== activity));
  };

  const handleBack = () => {
    setSelectedActivity(null);
  };

  return (
    <div className="App">
      {!user ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <>
          <h1>Welcome, {user}</h1>
          <ActivityForm onSave={handleSaveActivity} />
          {!selectedActivity ? (
            <ActivityList
              activities={activities}
              onSelect={handleSelectActivity}
              onToggle={handleToggleActivity}
              onDelete={handleDeleteActivity}
            />
          ) : (
            <ActivityDetails activity={selectedActivity} onBack={handleBack} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
